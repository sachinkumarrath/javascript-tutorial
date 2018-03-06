function passCallbacks(callback){
    callback();
}

let testCallbacks = passCallbacks((arg1) => {
    console.log("inside testCallbacks", arg1);
});

testCallbacks("sachin");


function catchAllErrors(func) {
    return (...args) => {
        try {
            func(...args);
        } catch (error) {
            console.log("catchAllErrors", error);
        }
    };
}
