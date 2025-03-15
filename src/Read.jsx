import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function Read() {
    const { id } = useParams();
    const [student, setStudent] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8081/read/${id}`)
            .then(res => {
                console.log(res);
                setStudent(res.data[0]); // Correction ici (res.data au lieu de res.date)
            })
            .catch(err => console.log(err));
    }, [id]);

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <h2>Student Detail</h2>
                <h3>ID: {student.ID}</h3>
                <h3>Name: {student.Name}</h3>
                <h3>Email: {student.Email}</h3>
                <Link to="/" className='btn btn-primary me-2'>Back</Link>
                <Link to={`/edit/${student.ID}`} className='btn btn-info'>Edit</Link>
            </div>
        </div>
    );
}

export default Read;
