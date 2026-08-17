const person = {
    name: "Sree Sagor Kumer Barmon",
    profession: 'Student', 
    age: 22,
    isSingle: false
}
console.log(person);
console.log(person.profession);

const age = person.age;
console.log(age);

person.age = 25;
person.isSingle = true;
console.log(person);

person.profession = 'Engineer';
console.log(person);