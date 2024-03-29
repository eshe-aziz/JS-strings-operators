//Find the last element of the following arrays.arr1 = [3,7,34,90,12]arr2 = [true, "green", "where",12,56]
let arr1 = [3,7,34,90,12];
let arr2 = [true, "green", "where", 12,56];
console.log(arr1[arr1.length-1], arr2[arr2.length-1]);


//Write a JS program that will join the following array elements into a stringmyPets = ["Cow", "Bird", "Snake", "Dog"];
let myPets = ["Cow", "Bird", "Snake", "Dog"];
console.log(myPets.join(","));

//Write a JS script to sort the following array itemsvar arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
let arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
arr3.sort();
console.log({arr3});

//Write a program to remove duplicates from the following array.Console the array without duplicates, and console another array that only contains the duplicates
//var arr = ["apple", "mango", "apple",   "orange", "mango", "mango"];
var arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
function removeDuplicates(arr) {
    return [...new Set(arr)]; //the spread operator returns the duplicate as an array
}
 
console.log(removeDuplicates(arr));

const duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
console.log(duplicates);

//Write a JS script to search for the following word in the array."way"If the word is present,
//console it else console "the search word was not found"let arr5 = ["the", "way", "x", 4];
let arr5 = ["the", "way", "x", 4]; 
const String = "way"; 

if (arr5.includes(String) !== -1) { 
    console.log(`${String} is present in the array`); 
} else { 
    console.log(`the search word was not found`); 
};

//Write a JS script to sort the following string:let word = "sevink"
let word = "sevink"
let sortedStr = word.split("").sort().join("");  
console.log(sortedStr);  
