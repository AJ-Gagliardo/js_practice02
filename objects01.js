
    
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

function personFactory(name){
 return{
    name,
    talk(){
      return `hello i am ${name}`
    }
  }

}

const me=personFactory('Anto');
