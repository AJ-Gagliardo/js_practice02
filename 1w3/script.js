console.log("testing");

// const testing = "testing";

const array = [5,3,8,1,2];

array.sort((a,b) => a-b);
console.log(array)

const asd = 'asd';
const splitted = asd.split("");
splitted.sort();
console.log(splitted)


const text1 = 'asd';
const text2 = 'dsa';

function checkAnagram(a ,b){
const arrayA = a.split("");
arrayA.sort();
const sortedA = arrayA.sort().join("");
const arrayB = b.split("");
arrayB.sort();
const sortedB = arrayB.sort().join("")


console.log(sortedA==sortedB)
console.log(arrayA);
console.log(arrayB);
}

checkAnagram(text1,text2);