/*
const PI = 3.1416;

PI = 3.16;
PI = PI +10;

const car = {tipo: "Toyota", modelo: "2018", color: "negro"};

car.color = "blanco";

car.dueno = "Oscar";

console.log(car);
*/
/*
var y;

function ejemplo(){
    y= 100 * 200;
    var z = 10;
    console.log("z: " + z);
}

ejemplo();

y = 1;

console.log("y: " + y);
*/
/*
var x = 0;

function g(){
    var y = 2;

    console.log(x,y);

    function b(){
        x = 3;
        y = 4;
        z = 5;
    }

    b();
    console.log(x, y, z)
}

g();

console.log(x,z);
*/

let i = 5;

for(let i=0; i<10; i++){

}

var x = 0;

function a(){
    x = 10;
    function b(){
        x = 20;
        console.log("b: " + x);
    }
    b();
    console.log("a: " + x);
}
a();
console.log("global: " + x);