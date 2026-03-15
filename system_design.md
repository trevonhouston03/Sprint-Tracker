# System Design – SprintTracker

## 1. System Overview

SprintTracker will be developed as a full-stack web application that allows athletes to track and analyze their training data.

The system will follow a client-server architecture where the frontend interface communicates with a backend server through API requests.

The backend will process requests and interact with a database that stores user information, workouts, and performance data.

---

## 2. System Architecture

The system will consist of three main components:

Frontend (Client)
Backend (Server)
Database

The frontend will send requests to the backend API. The backend will process those requests, apply business logic, and store or retrieve data from the database.

Architecture flow:

User → Frontend (React) → Backend API (Node.js / Express) → Database (PostgreSQL)

---

## 3. Technologies

Frontend:
- React
- Tailwind CSS
- Chart.js for data visualization

Backend:
- Node.js
- Express.js

Database:
- PostgreSQL

Version Control:
- Git and GitHub

These technologies were selected because they are widely used in web development and allow efficient development of full-stack applications.

---

## 4. Data Structures

The system will store structured data in a relational database.

Main data entities include:

Users
- user_id
- username
- email
- password

Workouts
- workout_id
- user_id
- distance
- duration
- intensity
- notes
- date

Performances
- performance_id
- user_id
- event_type
- time
- date

Relationships:
- One user can have many workouts
- One user can have many performance records

---

## 5. API Design (Basic)

The backend will expose REST API endpoints such as:

POST /register – create a user account  
POST /login – authenticate user  
POST /workouts – create a workout entry  
GET /workouts – retrieve workouts  
PUT /workouts/{id} – update workout  
DELETE /workouts/{id} – delete workout  

These endpoints will allow the frontend to interact with the system.

---

## 6. Design Considerations

The system design focuses on simplicity and maintainability. The client-server architecture separates the user interface from backend logic, making the system easier to scale or modify in the future.

Using a relational database allows structured storage of training data and supports queries that will be used for analytics and visualization.
