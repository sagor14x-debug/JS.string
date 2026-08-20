const commitment = "I will work hard and will never give up";

const parts = commitment.split('');
console.log(parts);

const reversedParts = parts.reverse();
console.log(reversedParts);

const reversedCommit = reversedParts.join('');
console.log(reversedCommit);


// // for loop:

// let reverseCom = '';

// for (const letter of commitment) {
//     reverseCom = letter + reverseCom;
//     console.log(letter, '=>' , reverseCom);
// }

