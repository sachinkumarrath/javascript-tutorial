function protoTypeTest1 () {
    function NewObject() {
        this.name = 'sachin';
    }

    function NewObject1() {
        this.name = 'ramesh';
        this.age = 24;
    }

    var x = new NewObject();
    var y = new NewObject();
    console.log(x, y);
    y.name = 'ramesh';
    console.log(x, y);
    y = x;
    y.name = 'sachin ramesh';
    console.log(x, y);

    x = new NewObject();
    y = new NewObject1();
    console.log(x, y);
}

console.log("\nprotoTypeTest1");
protoTypeTest1();

/////////////////////////////////////

function protoTypeTest2 () {
    function NewObject(){
    	this.name = 'sachin';
    }

    var x = new NewObject();
    var y = new NewObject();
    console.log(x,y);
    y.name = 'ramesh';
    console.log(x,y);
    y = x;
    y.name = 'sachin ramesh';
    console.log(x,y);
}

console.log("\nprotoTypeTest2");
protoTypeTest2();

/////////////////////////////////////

function protoTypeTest3 () {
    function NewObject(){
    	this.name = 'sachin';
    }

    function NewObject1(){
    	this.name = 'ramesh';
      this.age = 24;
    }

    var x = new NewObject();
    var y = new NewObject();
    console.log(x,y);
    y.name = 'ramesh';
    console.log(x,y);
    y = x;
    y.name = 'sachin ramesh';
    console.log(x,y);

    x =  new NewObject();
    y =  new NewObject1();
    console.log(x,y);
}

console.log("\nprotoTypeTest3");
protoTypeTest3();
