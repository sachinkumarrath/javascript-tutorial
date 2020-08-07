export default class StaticContainer {
    static logger(logObj) {
        console.log("logObj", logObj);
    }
    static testStatic () {
        StaticContainer.logger("Static call");
    }
}