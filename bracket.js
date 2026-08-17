const person = {
    name: "Sree Sagor Kumer Barmon",
    profession: 'Student', 
    age: 22,
    isSingle: false,
   'home address' : "London",
   "parent:name" : "Kodom Ali"

}

console.log(person['profession']);
console.log(person['age']);


console.log(person);
console.log(person['age']);
console.log(person['home address']);
console.log(person['parent:name']);


person["home address"] = 'Rajshahi';
console.log(person['home address']);