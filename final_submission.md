# SprintTracker – Final Project Submission

## 1. Project Overview

SprintTracker is a full-stack web application designed to help athletes track their sprint workouts and monitor performance over time. Users can log training sessions, view historical data, and analyze progress through visual charts and summary statistics.

The application is designed for track and field athletes and coaches who want a simple, centralized system for performance tracking.

---

## 2. Problem Being Solved

Athletes often track workouts manually using notes or spreadsheets, which makes it difficult to visualize progress or identify trends.

SprintTracker solves this by providing:
- centralized workout tracking
- automatic data storage
- performance visualization
- summary statistics

This improves consistency and makes training data easier to interpret.

---

## 3. Core Features

- Add sprint workouts (distance, time, date, type)
- View all past workouts
- Persistent database storage (SQLite)
- Dashboard with:
  - total workouts
  - total distance
- Performance trend chart (data visualization)
- Responsive UI dashboard layout

---

## 4. Tech Stack

Frontend:
- React
- JavaScript
- Recharts (data visualization)
- CSS (custom styling)

Backend:
- Node.js
- Express.js

Database:
- SQLite

---

## 5. System Architecture

The system follows a client-server architecture:

- Frontend (React)
  - Handles user interface
  - Sends API requests
  - Displays charts and stats

- Backend (Node.js/Express)
  - Handles API requests
  - Processes business logic
  - Connects to database

- Database (SQLite)
  - Stores workout data
  - Persists user entries

Data Flow:
User → Frontend → API → Backend → Database → Backend → Frontend

---

## 6. API Endpoints

- GET /api/workouts  
  Returns all workouts

- POST /api/workouts  
  Adds a new workout

- GET /api/stats  
  Returns total workouts and total distance

---

## 7. Data Model

Workouts Table:
- id (primary key)
- distance (text)
- time (text)
- date (text)
- type (text)

---

## 8. Testing

Testing was performed manually by:
- adding multiple workouts
- verifying database persistence
- checking API responses
- validating UI updates
- testing chart rendering

All major features function correctly with no critical bugs.

---

## 9. Challenges

- Database schema mismatch during development
- API routing errors between frontend and backend
- State synchronization between UI and backend data

These were resolved through debugging and schema resets.

---

## 10. Final Result

The final system is a working full-stack application with:
- persistent data storage
- real-time UI updates
- data visualization
- structured backend API

SprintTracker successfully demonstrates full-stack development principles.
