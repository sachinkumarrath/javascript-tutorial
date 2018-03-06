var callback = function (msg) {
    console.log("callback is called from: " + msg);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("inside callback promise execution for: " + msg);
            resolve();
        }, 100);
    });
};

var callback2 = function (msg) {
    console.log("callback is called from: " + msg);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for(let count = 0; count < 9000000000; count++) {

            }
            console.log("inside callback promise execution for: " + msg);
            resolve();
        }, 0);
    });
};

var callback3 = function (msg) {
    console.log("callback is called from :" + msg);
    for(let count = 0; count < 100000; count++) {

    }
    console.log("callback4 resolved");
};

var func1 = function(callback) {
    callback("func1").then(function(){
        for(let count = 0; count < 9000000000; count++) {

        }
        console.log("callback1 resolved");
    }).catch(function() {
        console.log("callback1 error");
    });
};

var func2 = (callback) => {
    callback("func2").then(() => {
        for(let count = 0; count < 100000; count++) {

        }
        console.log("callback2 resolved");
    }).catch(() => {
        console.log("callback2 error");
    });
};

var func3 = (callback) => {
    callback("func3").then(() => {
        for(let count = 0; count < 100000; count++) {

        }
        console.log("callback3 resolved");
    }).catch(() => {
        console.log("callback3 error");
    });
};

var func4 = (callback) => {
    callback("func4");
    console.log("callback4 resolved inside func4");
};

func1(callback);
func2(callback);
func3(callback2);
func4(callback3);
