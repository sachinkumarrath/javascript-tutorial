/**
** Rest parameters are used in function definition
** Spread operators are using while invoking functions
**/

// before es2015 using arguments object
let argumentTest = function () {
    let args = arguments; // arguments is the object which holds the args
    console.log("args for function with arguments", args);
}

// es2015 using rest parameters
let argumentTestWithDots = function (...params) {
    console.log("args for function with rest params", params);
}

argumentTest();
argumentTestWithDots();

argumentTest("123",5);
argumentTestWithDots("123",5);

argumentTest("sachin", 124, "7");
argumentTestWithDots("sachin", 124, "7");

// invoking the function with spread operators
const ARGS_TO_CHECK = ["sachin", 124, "7"];
argumentTestWithDots(...ARGS_TO_CHECK);
