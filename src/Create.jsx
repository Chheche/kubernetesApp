// Create.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Create() {
    const [values, setValues] = useState({ name: '', email: '' });
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/student', values)
            .then(() => navigate('/'))
            .catch(err => console.log(err));
    };
    
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h2>Add Student</h2>
                        </div>
                        <div>
                            <a href='/' className='btn btn-success'>Return</a>
                        </div>
                    </div>
                    <div className='mb-2'>
                        <label>Name</label>
                        <input type='text' placeholder='Enter Name' className='form-control'
                            onChange={e => setValues({ ...values, name: e.target.value })} />
                    </div>
                    <div className='mb-2'>
                        <label>Email</label>
                        <input type='email' placeholder='Enter Email' className='form-control'
                            onChange={e => setValues({ ...values, email: e.target.value })} />
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    );
}
export default Create;