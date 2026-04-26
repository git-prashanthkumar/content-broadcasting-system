# content-broadcasting-system (Backend)


## Overview

This project is a backend system for broadcasting educational content to students. Teachers upload content, principals approve it, and students can access approved content via public APIs.

---

##  Tech Stack

* Node.js
* Express.js
* PostgreSQL
* JWT Authentication
* Multer (File Upload)

---

## Features

* User Authentication (JWT)
* Role-Based Access Control (Teacher / Principal)
* Content Upload System
* Approval Workflow (Approve / Reject)
* Public API for content broadcasting

---

##  Project Structure

src/
├── controllers/
├── routes/
├── services/
├── middlewares/
├── models/


---

##  Setup Instructions

### 1. Clone the repository

git clone <your-repo-link>

### 2. Install dependencies

npm install

### 3. Create .env file

Add the following:

PORT=3000
JWT_SECRET=your_secret
DB_USER=postgres
DB_HOST=localhost
DB_NAME=broadcast_system
DB_PASSWORD=your_password
DB_PORT=5432

### 4. Run the server

npm start

---

## API Endpoints

### Auth

POST /auth/register
POST /auth/login

### Content

POST /content/upload
PUT /content/approve/:id
PUT /content/reject/:id
GET /content/live/:teacherId

---

## Content Workflow

Teacher → Upload Content → Pending
Principal → Approve / Reject
Approved Content → Available via API

---

## Current Limitations

* Rotation/Scheduling logic is **not fully implemented yet**
* No caching (Redis not implemented)
* Basic validation only

---

## Testing

Use Postman to test APIs.

---

## Notes

* Only approved content is visible via public API
* JWT is required for protected routes
* Role-based access is enforced

---

## Future Improvements

* Implement rotation-based scheduling
* Add Redis caching
* Add pagination & filters
* Improve validation & error handling


