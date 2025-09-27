// spread

// let fruits = ["banana" , "apple", "kivi", "watermaloen"]

// let veg = ["ladies finger", "garlic", "peas"]

// let total = [...fruits, ...veg]

// console.log(total)

// object 

let student = {
    name : "param",
    age : 15,
    marks : "95%"
}

let student1 = {
    ...student,
    name1 : "trupil",
    age1 : 18,
    marks1 : "90%"
}

console.log(student1)

let data = {...student, ...student1}
console.log(data)