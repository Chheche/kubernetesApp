FROM node:18
WORKDIR /app
COPY package.json package-lock.json ./
ENV NODE_ENV=production
RUN npm install --only=production
COPY . .
EXPOSE 5000
CMD ["npm", "start"]
