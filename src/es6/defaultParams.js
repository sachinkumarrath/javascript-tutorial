// Worked only for undefined
let defaultParamTest = function (str = "default") {
    console.log(`${str} for default param`);
};

defaultParamTest("test");   // prints "test for default param"
defaultParamTest();         // prints "default for default param"
defaultParamTest("");       // prints " for default param"
