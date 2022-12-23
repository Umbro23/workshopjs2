// Problem 1

let car={
    color:'Blue',
    Brand:'Honda',
    Model:'Civic',
    fuelSystem:'Diesel',
    engineCapacity:'2.2',

}
console.log(car)
console.log(car.color);
console.log(car.Model);

// Problem 2
delete car.engineCapacity;

car.carHolder='Lasha';

console.log(car);

//Problem 3 
let humans=["Lasha","Liza","Levani","Luka","Lazare"];

console.log(humans[2]);

humans.push("sofo");
humans.shift(0);

console.log(humans);

//Problem 4
// console.log([] && "John"); john
// console.log(null && "John"); false
// console.log(0 && -0); false
// console.log(Infinity && -Infinity); Infinity
// console.log([] || "John"); []
// console.log(null || "John"); john
// console.log(0 || -0); -0
// console.log(Infinity || -Infinity); -infinity


