// // task: 1.1

// let str = 'hello';
// let arr = ["h", "e", "l", "l", "o"];

// // const length = str.length;
// // console.log(length);

// const length = arr.length;
// // console.log(length);

// // console.log(str[0]);
// // console.log(arr[0]);

// // const push = str.push('!');
// // console.log(push);


// const push = arr.push('!');
// // console.log(push);
// // console.log(arr);

// // ################################################################################################################

// // task: 1.2

// let programmingLanguage = 'JavaScript';

// let language = programmingLanguage.split('');
// console.log(language);



// let animal = ['c', 'a', 't'];

// let cat = animal.join('');
// console.log(cat);

// // ################################################################################################################

// // task: 2.1

let name = 'JavaScript';

// console.log(name.toLowerCase());
// console.log(name.toUpperCase());


let language = "    hi there";

console.log(language);
console.log(language.trim());
console.log('@@@@@@@@@@@@', language.trimEnd(), '@@@@@@@@@@@@@@@');
console.log(language.trimStart() , '@@@@@@@@@@@@@@@');


// // ################################################################################################################

// // task: 3.1

let sentence = "Learning JavaScript is fun!"
console.log(sentence.slice(8, 19));

console.log(sentence.slice(-5));

// // ################################################################################################################

// // task: 3.2

let nam = 'Hello';
let nam2 = 'World';
let totalName = nam.concat(nam2);
console.log(totalName);


let computerLanguage = 'JavaScript';

// Template Literal Method:

console.log(`I'm learning ${computerLanguage}`);

// concat Method:

console.log("I'm learning ".concat(computerLanguage));

// '+' Method:

console.log("I'm learning " + computerLanguage);

// // ################################################################################################################

// // task: 4.1

// let reverseString = 'I live in Dhaka';

// let reverse = reverseString.split('').reverse().join('');
// console.log(reverse);


// let reverseString = 'I live in Dhaka';
// let reverse = '';

// for (i = reverseString.length - 1; i > 0; i--) {
//     reverse = reverse + reverseString[i];
// }
// console.log(reverse);


// // ################################################################################################################

// // task: 5.1

const student = {
    name: "Sagor Barmon",
    age: 22,
    grad: 3.5,
    isInrolled: true
}

console.log(student.age, student.name, student.isInrolled);

console.log(student['age'], student['grad'], student['name']);


// // ################################################################################################################

// // task: 6

let car = {
    brand: 'Toyota', 
    model: 'Corolla',
    year: 2022
};
console.log(car.brand);
console.log(car['model']);

car['color'] = 'Blue';
console.log(car['color']);

car.year = 2023;
console.log(car.year);

console.log(car);

// // ################################################################################################################

// // task: 7.1

let book = {
    title: "The Hobbit",
    author: "Tolkien",
    pages: 310
}
console.log(book);

let keys1 = Object.keys(book);
console.log(keys1);

let values1 = Object.values(book);
console.log(values1);

delete book.pages;
console.log(book);


// // ################################################################################################################

// // task: 7.2

let user = {
    username: 'Coder123',
    address: {
        city: 'Rajshahi',
        zip: '454655'
    }
};
console.log(user.address.city);

user.address.country = 'Bangladesh';
console.log(user.address.country);

delete user.address.zip;
console.log(user);

// // ################################################################################################################

// // task: 8.1

let scores = { 
    math: 90,
    science: 85,
    art: 95
};

for (score in scores) {
    console.log(scores);
};


// // average:

let sum = 0;
for (let score in scores) {
    sum = sum + scores[score];
};
let average = sum / 3;
console.log(average);


// // ################################################################################################################

// // task: 9

let contact = {
    name: "Sagor Barmon",
    email: "sAGor14@gmail.com",
    phone: '01585-957585'
};

console.log(contact.email.toLowerCase());

contact.email = 'sagor14x@gmail.com';
console.log(contact);



for (let c in contact) {
    console.log(contact);
}



let keys = Object.keys(contact);
console.log(keys);

let values = Object.values(contact);
console.log(values);

contact.fav0riteWord = ['cricket', 'football', 'Kabati'];
console.log(contact);


contact.favoriteWord = [];


contact.favoriteWord.push("JavaScript");
contact.favoriteWord.push("Coding");
contact.favoriteWord.push("Developer");
console.log(contact);


let reverse = contact.name.split('').reverse().join('');
console.log(reverse);


let check = contact.email.includes('.com');
console.log(check);


if (contact.email.includes('.com')) {
    console.log('Yes');
}
else {
    console.log('No');
}