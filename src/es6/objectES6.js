// object initializing

let firstName = "sachin",
    lastName = "rath";

let passObject = function () {
    return {
        firstName,
        lastName,
        fullName: `${firstName} ${lastName}`
    }
};

console.log(passObject());

// object destructuring
{
    // creating a block to change the scope
    let {firstName, lastName} = passObject();
    console.log(firstName, lastName);

    let {fullName, age} = passObject();
    console.log(fullName, age);
}

// function short hand

let passObjectWithFunction = function () {
    let firstName = "sachin",
        lastName = "rath",
        fullName = `${firstName} ${lastName}`;
    return {
        firstName,
        lastName,
        fullName,
        checkForDefaultName () {
            return "default name";
        }
    }
};

console.log("function short hand", passObjectWithFunction().checkForDefaultName);
console.log("function short hand", passObjectWithFunction().checkForDefaultName());
