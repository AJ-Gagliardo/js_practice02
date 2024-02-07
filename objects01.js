
    
    /*
    function book(title, author, pages, read){
        this.title = title;
    this.author= author;
    this.pages= pages;
    this.read=read;
    this.readMessage = read === true ? 'book already read' : 'book not read';
    this.info= function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readMessage}` 
    }
}

book1 = new book('The Subtle Art of Not Giving a F***', 'Mark Manson', 224, true);




function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
      console.log(this.name)
    };
  }
  
  const player1 = new Player('Antonio', 'X');
  const player2 = new Player('not Antonio', 'O');
  player1.sayName();  
  player2.sayName(); 


Player.prototype.sayHello = ()=> console.log('hello I am a player');

// Prototypal inheritance

player1.valueOf();

//Every prototype object inherits from Object.prototype by default.

*/

// ### Recommended method for prototypal inheritance #####
//Object.getPrototypeOf()  to view the prototype of an object
//Object.setPrototypeOf() to ‘set’ or mutate it

// function Person(name) {
//     this.name = name;
//   }
  
//   Person.prototype.sayName = function() {
//     console.log(`Hello, I'm ${this.name}!`);
//   };
  
//   function Player(name, marker) {
//     this.name = name;
//     this.marker = marker;
//   }
  
//   Player.prototype.getMarker = function() {
//     console.log(`My marker is '${this.marker}'`);
//   };
// Object.getPrototypeOf(Player.prototype);
// Object.setPrototypeOf(Player.prototype, Person.prototype);
// Object.getPrototypeOf(Player.prototype);

// const player1 = new Player('steve', 'X');
// const player2 = new Player('also steve', 'O');

// player1.sayName(); // Hello, I'm steve!
// player2.sayName(); // Hello, I'm also steve!

// player1.getMarker(); // My marker is 'X'
// player2.getMarker(); // My marker is 'O'


// factory fuction


/*

function personFactory(name){
 return{
    name,
    talk(){
      return `hello i am ${name}`
    }
  }

};

const me=personFactory('Anto');


const jill = personFactory('Jill')

// Write a factory function called createPerson that takes three parameters: name, age, and gender, and returns an object representing a person with those properties.


function createPerson(name, age, gender){
 return {
   name,
   age,
   gender
  }
};

const pedro = createPerson('pedro', 30, 'male');

*/

// Setters and getters


/*

const account = {
owner: 'Jonas',
movements:[200,530,120,300],

get latest(){
  return this. movements.slice(-1).pop();
},
set latest(mov){
  this.movements.push(mov);
}
};

console.log(account.latest);



class Person{
  constructor(fullName){
    this.fullName = fullName
  };

    set fullName(name){
      console.log(name);
      if(name.includes(' ')) this._fullName=name;
      else(alert(`${name} is not a full name `));
    };

    get fullName(){
      return this._fullName
    }
}

const antonio = new Person('Antonio Gagliardo');
console.log(antonio)

*/

class User {
  constructor(name){
    this.name = name;
  }
  sayHi(){
    console.log(this.name);
  }
}

let user = new User('Antonio');



class Rectangle{
  constructor(height, width){
    this.height = height;
    this.width =width;
  }
  get area(){
    return this.calcArea();
  }
  calcArea(){
    return this.height * this.width;
  }

}

  class Cat {
    constructor(name){
      this.name = name;
    }
    speak(){
      console.log(`${this.name} makes a noise`);
    }
  }


rectangle1 = new Rectangle(10,20);
console.log(rectangle1)

const cat1 = new Cat('Rengar');
cat1.speak()

class Lion extends Cat{
  speak(){
    super.speak();
    console.log(`${this.name} roars`);
  }
}

const lion1 = new Lion('Simba');
lion1.speak()



class Animal {
  speak() {
    return this;
  }
  static eat() {
    return this;
  }
}

const obj = new Animal();
obj.speak(); // returns the objetct

// obj.eat(); //doesnt work
Animal.eat() // 


function OldStyleClass(){
  this.someProperty = 1;
}


// getters adn setters again


const treasutreChest = {
  _goldCoins:0,
  get goldCoins(){
    return this._goldCoins;
  },
  set goldCoins(amount){
    if(amount>=0){
      this._goldCoins = amount;
    }else{
      console.log("Sorry can't put negative coins")
    }
  }
}



