function test1 () {
    function Product(price,productType){
        this.price = price;
        this.productType = productType;
    }

    function FoodProduct(price,productType,category){
        Product.call(this,price,productType);
        this.category = category;
    }

    function Paper(price,productType,size){
        Product.apply(this,[price,productType]);
        this.size = size;
    }

    var paperObj = new Paper(20,'paper','A4');

    var foodObj = new FoodProduct(10,'food','V');

    console.log(paperObj,foodObj);
}

console.log("\ntest1");
test1();

/***************************************************************/

function test2 () {
    function Product(name,price){
    	this.name = name;
        this.price = price;
    }

    var x = new Product('car',2000);
    console.log(x);

    function ToyProduct(name,price,type){
    	Product.call(this,name,price);
    	this.type = type;
    }

    var toy1 = new ToyProduct('car',2000,'toy');
    console.log(toy1);
}

console.log("\ntest2");
test2();

/****************************************************************/

function test3 () {
    function NewObject(name){
    	this.name = name;
    }

    var x = new NewObject('sachin');
    x.getName = function(){
        return 'hi '+this.name;
    };

    var y = new NewObject('ramesh');
    console.log(x.getName(),x.getName.bind(y)());
}

console.log("\ntest3");
test3();
