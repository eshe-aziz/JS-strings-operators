//extract last four characters
function removeCharacter(str) { 
    let newString = str.slice(0, -4); 
    return newString; 
} 



//insert index at the fourth index
let str = 'extravaganza'; 
console.log(removeCharacter(str));

const originalString = "The quick fox jumped over the lazy dog";
const charToInsert = 'eat';
const indexToInsertAt = 4;

const newString = `${originalString.slice(0, indexToInsertAt)}${charToInsert}${originalString.slice(indexToInsertAt)}`;

console.log(newString);



//count substring occurence in a string
var temp = "The quick brown fox jumps over the lazy dog";
var count = (temp.match(/the/g) || []).length;
console.log(count);

var temp = "The quick brown fox jumps over the lazy dog";
var count = (temp.match(/brown/g) || []).length;
console.log(count);



//find if substrings in a string
let string1= "The pupils are reading in the library";
let substring1 = "the";

console.log(string1.includes(substring1));

let string2= "The child was sitting on the table before it fell";
let substring2 = "sitting";

console.log(string2.includes(substring2));



//converting strings to specified format
const  word = 'wonderful';

console.log(word.toUpperCase());

let comment = 'amazing';

console.log(comment.toLowerCase());

let text = 'undERneath';

console.log(text.toLowerCase());

function titleCase(str) {
    return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
  }
  console.log(titleCase('A wonderful world'));