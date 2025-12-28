# Task Management App – Final Capstone Project

## 📌 Project Overview
This project is a full-stack Task Management Application developed as part of the Final Capstone Project.  
It implements secure user authentication, role-based access control (Admin/User), and complete CRUD operations with proper frontend–backend integration.

---

## 🛠️ Tech Stack

### Frontend
- React
- CSS (Custom Styling)
- Fetch API
- JWT Authentication

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Token (JWT)
- bcrypt.js

---

## 🔐 Authentication Features
- User Registration
- User Login with JWT
- Secure token storage in browser
- Protected routes
- Logout functionality

---

## 👥 Role-Based Access Control

The application supports two user roles:

### 👤 User
- Can create tasks
- Can view only their own tasks
- Can update and delete only their own tasks

### 🛡️ Admin
- Can view all users’ tasks
- Can update and delete any task
- Role-based access is strictly enforced at the backend level

---

## 📋 Core CRUD Module (Task Management)

### Task Features
- Create Task
- Read Tasks
- Update Task Status (Pending / Completed)
- Edit Task Details
- Delete Task

All CRUD operations are fully integrated between the frontend and backend.

---

## ✅ Validation & Error Handling
- Backend validation for required fields
- Frontend form validation
- Meaningful error messages for invalid inputs
- Graceful handling of API and authentication errors

---

## 📂 Project Structure
task-management-app/
│
├── backend/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── server.js
│ └── .env
│
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ ├── services/
│ │ ├── styles/
│ │ └── App.js
│ └── package.json
│
├── screenshots/
│ ├── register-page.png
│ ├── login-page.png
│ ├── user-dashboard.png
│ ├── add-task-page.png
│ ├── admin-dashboard.png
│ └── task-crud-operations.png
│
└── README.md


---

## ▶️ How to Run the Project

### Backend Setup
```bash
cd backend
npm install
npx nodemon server.js

cd frontend
npm install
npm start

🧪 Testing Credentials
👤 Normal User
Email: suba@test.com
Password: 123456

🛡️ Admin User
Email: admin@test.com
Password: admin123

📸 Screenshots

Screenshots demonstrating authentication, dashboards, and CRUD operations are included in the screenshots folder.

🎯 Key Highlights

JWT-based secure authentication

Role-based authorization (Admin/User)

Complete CRUD functionality

Clean and scalable project structure

Proper frontend–backend integration

Robust validation and error handling

📌 Conclusion

This project demonstrates a strong foundation in full-stack web development concepts, including authentication, authorization, CRUD operations, and real-world application architecture using the MERN stack.
