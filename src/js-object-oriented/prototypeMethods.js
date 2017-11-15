function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.requiredRegistration = function(){
        return this.year < 2017;
    }
}

Car.prototype.getCarName = function() {
    return this.year + " " + this.make + " " + this.model;
};

var car1 = new Car("Honda", "Civic", 2016);
var car2 = new Car("Honda", "Civic", 2017);
var car3 = new Car("Toyota", "Camry", 2016);
var car4 = new Car("Toyota", "Corolla", 2017);

console.log(car1);
console.log(car1.requiredRegistration());
console.log(car1.getCarName());
