let consoleTestWithPrepend = function (logText) {
    console.log("Inside JS tutorial",logText);
};

// returns an object when exports used
exports.consoleTest = consoleTestWithPrepend;

export {consoleTestWithPrepend};
