# Structured Code Review & Quality Audit – SprintTracker

---

## Part 1: Code Selection

### Feature Name
Workout Logging & Retrieval System

### Description
This feature allows users to input workout data (distance and time) through a frontend interface and send that data to a backend server using an API. The backend processes the request, stores the workout data in memory, and returns the updated dataset. The frontend then dynamically displays the stored workouts.

This feature represents a full-stack interaction including user input, API communication, server-side logic, and UI updates. It is a core functionality of the SprintTracker application and demonstrates real-time data flow between client and server.

### Files Reviewed
- client/index.html
- server/server.js

### Approximate Lines of Code
~120 lines total

---

## Part 2: Structured Code Review

### A. Correctness

**Strength:**
The system successfully sends workout data from the frontend to the backend and retrieves it correctly.

**Improvement:**
No validation exists on the backend. Invalid data could still be submitted.

---

### B. Architecture Alignment

**Strength:**
The application follows a basic client-server structure.

**Improvement:**
All backend logic exists in a single file, increasing coupling and reducing scalability.

---

### C. Readability & Maintainability

**Strength:**
Variable names are clear and easy to understand.

**Improvement:**
Code lacks comments and modular structure.

---

### D. Security & Validation

**Strength:**
Basic frontend validation prevents empty inputs.

**Improvement:**
No backend validation or authentication exists.

---

### E. Performance Considerations

**Strength:**
Application performs well for small datasets.

**Improvement:**
Data is stored in memory and lost on restart. Entire dataset reloads every request.

---

## Identified Improvement Opportunities

1. Add backend validation
2. Implement error handling
3. Separate backend logic into modules
4. Use a real database
5. Improve frontend structure
6. Add user feedback for errors

---

## Refactoring

### Refactor 1: Backend Validation

**Before:**

    app.post("/api/workouts", (req, res) => {
        const workout = req.body;
        workouts.push(workout);
        res.json({ message: "Workout added", workout });
    });

**After:**

    app.post("/api/workouts", (req, res) => {
        const { distance, time } = req.body;

        if (!distance || !time) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const workout = { distance, time };
        workouts.push(workout);

        res.json({ message: "Workout added", workout });
    });

**Explanation:**
This ensures only valid data is stored and prevents empty or broken entries.

---

### Refactor 2: Frontend Error Handling

**Before:**

    await fetch("http://localhost:5000/api/workouts", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ distance, time })
    });

**After:**

    try {
        const res = await fetch("http://localhost:5000/api/workouts", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ distance, time })
        });

        if (!res.ok) {
            throw new Error("Failed to add workout");
        }

        loadWorkouts();
    } catch (error) {
        alert(error.message);
    }

**Explanation:**
This prevents silent failures and provides user feedback if something goes wrong.

---

## Instructor Feedback Request

I would like feedback on how to properly structure the backend using controllers, routes, and services for better scalability.

---

## Part 3: Reflection

### What issues were discovered?
The main issues discovered were lack of backend validation, missing error handling, and weak architecture. The system works but is not robust. Find the github project in command prompt was also a problem for me as well

### Were any architectural inconsistencies identified?
Yes because the backend is not modular and doesn't follow a layered architecture.

### What would have happened without review?
The application would allow bad data and become harder to maintain and scale. I would also go into something blindly which is bad

### How will you integrate code reviews in future sprints?
I will perform structured reviews before merging code and use a checklist to ensure quality.
