const fruits = ["apple", "banana", "mango", "strawberry"]

console.log(fruits.at(1));

console.log(fruits[2])



// destucturing

//  that allows you to extract values from objects or arrays into distinct variables.

const [one, two] = fruits

console.log(one); 

//object

const person = {
    name : "john",
    age : 22,
    city : "bvn",
};

console.log(person)
console.log(person.name)// when we excess only particular value that time to variable.key


//destuctor


const {name} = person

console.log(name)