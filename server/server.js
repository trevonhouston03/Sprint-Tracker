const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors()); 
app.use(express.json());

let workouts = [];

app.get("/api/workouts", (req, res) => {
    res.json(workouts);
});

app.post("/api/workouts", (req, res) => {
    const workout = req.body;
    workouts.push(workout);
    res.json({ message: "Workout added", workout });
});

app.listen(5000, () => console.log("Server running on port 5000"));