const subject = 'chemistry';
const book = 'CheMiSTry';

console.log(book.toLowerCase());

if (subject.toLowerCase() === book.toLowerCase()) {
    console.log("Poira poira fatai felbo!!!");
}
else {
    console.log("Ei bar ki auto pass acche!!!!");
}


// ########################################################################################################

const emailUserProvided = '       goni@Mia.com      ';
const emailSavedInDatabase = 'goni@mia.com';

console.log(emailUserProvided.trim());
console.log('########', emailUserProvided.trimEnd(), '###########');
console.log(emailUserProvided.trimStart());

if (emailUserProvided.toUpperCase() === emailSavedInDatabase.toUpperCase()) {
    console.log("Hello Bangladesh");
}
else {
    console.log("I'm going to UK");
}