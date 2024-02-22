// web stora API


// not part of DOM, refers to the window API
// available to JS via the globale variable window


// we do not have to type window. it is implied:

const myArray = ['eat', 'sleep', 'code']

const myObject={
    name: 'Antonio',
    hobbies:['eat','sleep','code'],
    logName: function(){
        console.log(this.name);
    }

}



// myObject.logName();

// sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));
// const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
// console.log(mySessionData);

// //session Storage
// sessionStorage.setItem("mySessionStore", JSON.stringify(myArray));
// const mySessionData = JSON.parse(sessionStorage.getItem('mySessionStore'));
// console.log(mySessionData)

//  // local storage
localStorage.setItem("myLocalStore", JSON.stringify(myArray));
const myLocalData = JSON.parse(localStorage.getItem('myLocalStore'));
console.log(myLocalData)
