const numbers = [34, 23, 56, 32, 65, 90, 99, 12];

for (number of numbers) {
    console.log(number);
}

// ################################################################################################################################


const student = {
    name: 'Sagor Kumer Barmon',
    id: 1831,
    age: 22, 
    favSubject: ['Physics', 'Math', 'Chemistry']
}

// for ... of --> array
// for ... in --> object

for (key in student) {
    console.log(key);
    const value = student[key];
    console.log(key, value);
}

const keys = Object.keys(student);
console.log(keys);

for (const key of keys) {
    console.log(key);
    const value = student[key];
    console.log(key, value);

}