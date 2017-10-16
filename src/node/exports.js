let consoleTestWithPrepend = function (logText) {
    console.log("Inside JS tutorial",logText);
};

let gradeCalculator = function (marks) {
    if (marks >= 80) {
        return "A";
    } else if (marks >= 65) {
        return "B";
    } else if (marks >= 50) {
        return "C";
    } else if (marks >= 40) {
        return "D";
    } else {
        return "F";
    }
};

let averageCalculator = function (marks) {
    let sum = 0;
    for (let mark of marks) {
        sum = sum + parseInt(mark);
    }
    return sum/marks.length;
};

// returns an object when exports used
exports.consoleTest = consoleTestWithPrepend;

export {consoleTestWithPrepend, gradeCalculator, averageCalculator};
