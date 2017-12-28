// use babel-node to run es6
import {consoleTestWithPrepend, averageCalculator, gradeCalculator, stringUtils} from "./exports";

console.log("inside importbasic");

consoleTestWithPrepend("Let's test");

console.log("Avg. " + averageCalculator([12,90,87,65]));

console.log("Grade " + gradeCalculator(67));

console.log("------ Testing string utils ------");
console.log(stringUtils.functionAddA("Hello"));
console.log(stringUtils.functionAddB("Hello"));
