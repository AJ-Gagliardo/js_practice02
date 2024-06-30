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



// exercise make a function that sums and array
function sumArray(arr) {
   
    const sumArr = arr.reduce((a,b)=>{
        return a+b;
    },0)
    return sumArr;
  }
  
  // Example:
  console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15



  function reverseArray(arr) {
    
    const reverseA = arr.reverse()
    return reverseA;
  }
  
  // Example:
  console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
  

  function maxElement(arr) {
    const sortedArr = arr.sort((a,b)=> {return a-b});
    return sortedArr[arr.length -1]; 
  }
  
  // Example:
  console.log(maxElement([1, 3, 7, 2, 5])); // Output: 7