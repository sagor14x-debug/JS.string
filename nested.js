const college = {
    name: 'vnc',
    address: 'baily road',
    students: 800,
    events: ['Independence day', 'victory day', 'science fair', '21 Feb'],
    people: {
        count: 200,
        principal: {
            name: 'Sabura mam',
            yearsOfExperience: 25,
            degree: 'English'
        }
    }

}

console.log(college);
console.log(college.students);
console.log(college.people);
console.log(college.people.principal.degree);

console.log(college['people']['principal']['degree']);
console.log(college['people']['principal'].name);

college.events[3] = 'Book fair'
console.log(college.events);