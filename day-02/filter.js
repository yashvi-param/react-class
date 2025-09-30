//The filter() method creates a new array filled with elements that pass a test provided by a function.
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const even = number.filter((num) => num % 2 == 0)

console.log(even)

const personData = [
    {
        name: "john",
        age: 20,
        city: "bvn",
    },
    {
        name: "alice",
        age: 24,
        city: "ahm",
    },
     {
        name: "serra",
        age: 17,
        city: "srt",
    }
]

const eligiblePerson = personData.filter((person) => person.age > 18)

console.log(eligiblePerson)

