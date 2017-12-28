// Worked only for undefined
let defaultParamTest = function (str = "default") {
    console.log(`${str} for default param`);
};

defaultParamTest("test");   // prints "test for default param"
defaultParamTest();         // prints "default for default param"
defaultParamTest("");       // prints " for default param"

// Using named parameters
let namedParamTest = function (str, {name, age, address}) {
    console.log("===========================");
    console.log("str : " + str);
    console.log("name : " + name);
    console.log("age : " + age);
    console.log("address : " + address);
};

namedParamTest("test1",{
    name: "sachin",
    age: 31,
    address: "halford"
    }
);

namedParamTest("test2",{
    name: "priya",
    age: 27
    }
);

namedParamTest("test3",{});

try {
    namedParamTest("test4");
} catch (error) {
    console.log("error invoked bcoz of type issue. need a 2nd param or a default param check.")
    console.log(error);
}

// Using named parameters with default
let namedParamTestWithDefault = function (str, {name, age, address} = {}) {
    console.log("===========================");
    console.log("str : " + str);
    console.log("name : " + name);
    console.log("age : " + age);
    console.log("address : " + address);
};

namedParamTestWithDefault("test1 with default");
