let challenge = "30 Days of Javascript"
console.log(challenge.length);

let challenge2 = "30 Days of Javascript"
let newChallenge=challenge2.toUpperCase();
let newChallenge2=challenge2.toLowerCase();

console.log(newChallenge);
console.log(newChallenge2);

let challenge3 = '30 Days of Javaascript'
let firstWord=challenge3.substring(0,2);
console.log(firstWord);


let string = '30 Days of Javascript';
let newString = string.slice(3);
console.log(newString);

let contain = '30 Days of Javascript'
let newContain = contain.includes('script');
console.log(newContain);

let challenge4 = '30 Days of Javascript'
console.log(challenge4.split(","));


let companies = "'Facebook','Google','Microsoft','Apple'";
let companiesArray = companies.split(',');
console.log(companiesArray);

let challenge5='30 Days of Javascript';
console.log(challenge5.charAt(15));
console.log(challenge5.charCodeAt('J'));
console.log(challenge5.indexOf('a'));


let sentence = 'You cannot end a sentence with because because because is a conjuction';
console.log(sentence.indexOf('because'));
console.log(sentence.lastIndexOf('because'));
console.log(sentence.search('because'));
console.log(sentence.startsWith('You'));




