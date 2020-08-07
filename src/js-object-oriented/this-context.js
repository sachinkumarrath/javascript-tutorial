/**
 * Arrow doesn't have it's own this binding. It retains the this binding of it's lexical context
 */
var prop =21
const test = {
  prop: 42,
  func: function() {
    return this.prop;
  },
  func1: () => this.prop
};

console.log(test.func()); // 
// expected output: 42
console.log(test.func1()); // 