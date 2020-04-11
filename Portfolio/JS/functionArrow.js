// Same function written as function declaration
function fullName (fName, lName) {
  console.log(`${lName} ${fName}`);
}
fullName('Tiffany', 'Hudgens');

// Same function written as function expression
var fullName = function (fName, lName) {
  console.log(`${fName} ${lName}`);
}
fullName('Kristine', 'Hudgens');

// Basic arrow function
var helloWorld = () => { console.log("Hi there"); }
helloWorld();

// Arrow function with shorthand function argument for single arguments
var firstName = fname => { console.log(fname.toUpperCase()); }
firstName('Jordan');

// Arrow function with multiple arguments
fullName = (fName, lName) => { console.log(`${lName} ${fName}`); }
fullName('Kristine', 'Hudgens');
