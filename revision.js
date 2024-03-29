let a = "extravaganza"
console.log(a.substr(8,12))


const y = "The quick fox jumped over the lazy dog"
const addString = y.slice(0,4) + "eat" + y.slice(4);
console.log({addString})

const story = "The quick brown fox brown jumped over the lazy dog"
let b = "brown";
let c = story.split(b).length-1
console.log(c)


const str1 = "The pupils are reading in the library"
console.log(str1.search("are"));

const str2 = "The child was sitting on the table before it fell"
console.log(str2.search("sitting"));

let n = "wonderful"
console.log(n.toUpperCase())

let m = "amazing"
console.log(m.toLowerCase())

let z = "undERneath"
console.log(z.toLowerCase())


/////////////////////////////////////////////////////
//Extract characters
let word = "extravaganza"
console.log({Character:word[11]});
console.log({Character:word[10]});
console.log({Character:word[9]});
console.log({Character:word[8]});
let extracted_word = word[8] + word[9] + word[10] + word[11];
console.log(extracted_word);
// Insert String
let s = 'eat';
const food = "The quick fox jumped over the lazy dog";
let add = `The quick fox jumped ${s} over the lazy dog`;
console.log({add});
// const substring = "eat";
// food.slice()
// const foods = "The";
// const foods1 = "quick fox jumped over the lazy dog";
// const foodest = "${foods} eat ${foods1}";
// console.log(foodest)
//count
const string1 = "The quick brown fox jumps over the lazy dog";
console.log((string1.match(/ the/g)).length);
console.log((string1.match(/brown/g)).length);
//question 5
const  wd= 'wonderful';
console.log(wd.toUpperCase());
let comment = 'amazing';
console.log(comment.toLowerCase());
let text = 'undERneath';
console.log(text.toLowerCase());
function titleCase(str) {
    return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
}
console.log(titleCase('A wonderful world'));
//question 4
const str1= "The pupils are reading in the library";
let substr1 = "the";
console.log(str1.includes(substr1));
let str2= "The child was sitting on the table before it fell";
const substr2 = "sitting";
console.log(str2.includes(substr2));
