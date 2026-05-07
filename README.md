# 🏃 SprintTracker

A full-stack web application that helps athletes track sprint workouts, visualize performance, and monitor training progress over time through a simple analytics dashboard.

---

## 🚀 Live Demo
http://localhost:5173

---

## 🧠 Project Overview

SprintTracker is designed for track athletes and coaches who need a simple way to log workouts and understand performance trends.

Instead of using spreadsheets or notes, users can:
- Log sprint workouts
- Track training history
- View performance summaries
- Visualize progress using charts

The system transforms raw training data into meaningful insights.

---

## 🛠️ Tech Stack

Frontend: React (Vite)  
Backend: Node.js + Express  
Database: SQLite  
Charts: Recharts  
Styling: CSS  

---

## ⚡ Quick Start

### 1. Clone Project
git clone <your-repo-url>
cd SprintTracker

---

### 2. Start Backend
cd server
npm install
node server.js

Backend runs on:
http://localhost:5000

---

### 3. Start Frontend
cd client
npm install
npm run dev

Frontend runs on:
http://localhost:5173

---

## 📊 Features

- Add sprint workouts (distance, time, date, type)
- Store workouts in database (SQLite)
- View workout history
- Dashboard stats:
  - Total workouts
  - Total distance
- Performance trend chart
- Live UI updates after adding workouts

---

## 🔌 API Endpoints

GET /api/workouts → Get all workouts  
POST /api/workouts → Add workout  
GET /api/stats → Get summary stats  

---

## 🏗️ System Architecture

Frontend (React):
- Handles UI
- Sends requests to backend
- Displays data and charts

Backend (Node + Express):
- Handles API requests
- Processes workout data
- Connects to database

Database (SQLite):
- Stores workout records
- Persists data locally

Data Flow:
User → Frontend → Backend API → Database → Frontend update

---

## 📈 Core Functionality

Users input:
- Distance
- Time
- Date
- Type

System outputs:
- Stored workout history
- Total workout count
- Total distance
- Visual performance chart

---

## 🧪 Testing

The app was tested by:
- Adding multiple workouts
- Refreshing to confirm persistence
- Checking API responses
- Validating chart updates
- Ensuring stats update correctly

---

## ⚠️ Known Issues

- Backend must be running before frontend
- SQLite is local storage (not cloud-based)

---

## 🚀 Future Improvements

- User authentication
- Athlete profiles
- Speed/pace calculations
- Filtering by workout type/date
- Deployment to cloud hosting
- Mobile UI optimization

---

## 👨‍💻 Author

Built as a full-stack capstone project demonstrating:
- REST API development
- Frontend/backend integration
- Database design
- Data visualization
- Real-world application structure
