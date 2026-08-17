const person = {
    name: "Sree Sagor Kumer Barmon",
    profession: 'Student', 
    age: 22,
    isSingle: false,
    home: 'Rajshahi'
}

delete person.age;
console.log(person);

delete person.profession;
console.log(person);

const keys = Object.keys(person);
console.log(keys);

const values = Object.values(person);
console.log(values);

// entries:

console.log(Object.entries(person));