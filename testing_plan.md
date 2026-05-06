# Software Quality & Testing Plan – SprintTracker

## 1. Testing Strategy Overview

The testing strategy for SprintTracker focuses on ensuring reliability, correctness, and usability across all layers of the application. The project will use a combination of unit testing, integration testing, and basic end-to-end testing.

- **Unit Testing:** To verify individual functions and logic work correctly.
- **Integration Testing:** To ensure components (frontend, backend, database) work together properly.
- **End-to-End Testing:** To simulate real user workflows.

**Tools:**
- Node.js testing: Jest (planned)
- API testing: Postman
- Manual UI testing for frontend

**Testing in Sprint Process:**
Testing will be done during each sprint after features are implemented. Core functions will be tested immediately after development to catch issues early.

**Responsibility:**
Since this is a solo project I am responsible for writing, executing, and documenting all tests.

---

## 2. Unit Test Plan

### 1. registerUser()
- **Description:** Creates a new user account
- **Test Case 1:**
  - Input: valid username, email, password
  - Output: user successfully created
- **Test Case 2:**
  - Input: duplicate email
  - Output: error message
- **Edge Case:**
  - Input: empty fields
  - Output: validation error

---

### 2. loginUser()
- **Description:** Authenticates user credentials
- **Test Case 1:**
  - Input: correct email and password
  - Output: authentication token
- **Test Case 2:**
  - Input: incorrect password
  - Output: error message
- **Edge Case:**
  - Input: missing password
  - Output: validation error

---

### 3. createWorkout()
- **Description:** Stores a workout entry
- **Test Case 1:**
  - Input: valid workout data
  - Output: workout saved
- **Test Case 2:**
  - Input: missing required field
  - Output: error message
- **Edge Case:**
  - Input: extremely large values
  - Output: handled or rejected properly

---

### 4. getWorkouts()
- **Description:** Retrieves workouts for a user
- **Test Case 1:**
  - Input: valid user ID
  - Output: list of workouts
- **Test Case 2:**
  - Input: user with no workouts
  - Output: empty list
- **Edge Case:**
  - Input: invalid user ID
  - Output: error

---

### 5. updateWorkout()
- **Description:** Updates an existing workout
- **Test Case 1:**
  - Input: valid update data
  - Output: updated workout
- **Test Case 2:**
  - Input: non-existent workout ID
  - Output: error message
- **Edge Case:**
  - Input: invalid data format
  - Output: validation error

---

## 3. Integration Test Plan

### 1. Frontend ↔ Backend API
- **Components:** React frontend and Express API
- **Validation:** API requests correctly send and receive data
- **Expected Result:** Data is displayed correctly on UI
- **Failure Scenario:** API fails → UI shows error

---

### 2. Backend ↔ Database
- **Components:** Express server and PostgreSQL database
- **Validation:** Data is correctly stored and retrieved
- **Expected Result:** Queries return accurate results
- **Failure Scenario:** Database connection fails → error returned

---

### 3. Authentication Flow
- **Components:** Frontend login form, backend auth system, database
- **Validation:** User can register, log in, and stay authenticated
- **Expected Result:** User receives token and gains access
- **Failure Scenario:** Invalid login → access denied

---

## 4. System / End-to-End Test Scenarios

### Scenario 1: User Registration and Login
1. User registers with valid information
2. User logs in
3. System returns authentication token

**Expected Outcome:**
User successfully logs in and accesses dashboard

**Failure Points:**
- Duplicate account
- Incorrect password
- Server error

---

### Scenario 2: Workout Logging Workflow
1. User logs in
2. User creates a workout entry
3. User retrieves workout list

**Expected Outcome:**
Workout appears in the user’s dashboard

**Failure Points:**
- Missing input data
- API failure
- Database error

---

## 5. Non-Functional Testing Considerations

- **Performance:** The system should handle multiple requests without significant delay.
- **Security:** Passwords must be hashed and protected. Authentication must be secure.
- **Input Validation:** All user inputs must be validated to prevent invalid data.
- **Error Handling:** The system should return clear error messages without crashing.

---

## 6. Defect Tracking Method


- **How will your team track bugs?:** Each bug will be logged as an issue with a description and steps to reproduce or ways to improve from it.
- **Where will defects be documented:** Issues will include severity level and status.
- **Who is responsible for resolution tracking:** As a solo developer, I am responsible for identifying, tracking, and resolving all defects.
