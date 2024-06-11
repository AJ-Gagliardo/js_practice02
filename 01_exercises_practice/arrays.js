// Anagram

const array = [5,3,8,1,2];

array.sort((a,b) => a-b);
console.log(array)

const asd = 'asd';
const splitted = asd.split("");
splitted.sort();
// console.log(splitted)


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

}

checkAnagram(text1,text2);


// shuffle an array
// ned this for my memory card game

function shuffleArray(array){

    
    
    for(let i = 0 ; i < array.length; i++){
        const randomIndex = Math.floor(Math.random()*array.length);
[array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    console.log(array);

}


// function getRandomIndex(){
//     console.log(Math.floor(Math.random()*array.length))
// }
