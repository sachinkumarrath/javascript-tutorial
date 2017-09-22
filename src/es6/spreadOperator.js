// Spread operators work as sending parameters to function as an array
function sum1Args(x, y, z) {
    console.log("sum of numbers : ", x + y + z);
}
var args = [1, 2, 3];
sum1Args(...args);
