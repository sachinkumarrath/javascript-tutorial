import express from "express";
import {gradeCalculator, averageCalculator} from "./exports";

let app = express();
app.get("/", (req, res) => {
    console.log("inside GET");
    res.send("Congratulation for express installation");
});

app.get("/grades", (req, res) => {
    console.log("check grades");
    let marks = req.query.grades.split(",");
    console.log("marks submitted" + marks);
    const avg = averageCalculator(marks);
    const grade = gradeCalculator(avg);
    res.send(`The average is ${avg} and grade is ${grade}`);
});

app.listen(1900);
console.log("--------server started--------");
