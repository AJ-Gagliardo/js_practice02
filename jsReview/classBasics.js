// You are making a class called Fruit. Each fruit has a name (like "apple") and a color (like "red").

// Question:
// Can you write a class called Fruit that uses a constructor to accept the name and color as parameters, and stores them in this.name and this.color?

console.log(`exercise 1, fruits class`);
class Fruit {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  description() {
    console.log(
      `this fruit is called ${this.name} and it its color is ${this.color}`
    );
  }
}

const apple = new Fruit("apple", "red");
apple.description();

/*
You’re making a Knight class. A knight has a name, and he can be given a Weapon.
A Weapon has a type (e.g., "sword") and a damage value (e.g., 15).
The knight can attack(), which should log something like:

"Sir Bravestone attacks with sword and deals 15 damage!"

🚧 What you’ll need to do:
Create a class Weapon that takes type and damage as parameters.

Create a class Knight that takes name and a weapon object as parameters.

Inside Knight, store the name and weapon in this.name and this.weapon.

Make a method called attack() that prints the sentence using both.

Create a weapon and a knight, and have the knight attack.
*/

class Knight {
  constructor(name, weapon, health) {
    this.name = name;
    this.weapon = weapon;
    this.health = health;
  }

  attack(target) {
    console.log(
      `${this.name} attacks ${target.name} with ${this.weapon.type} and deals ${this.weapon.damage}`
    );
    target.takeDamage(this.weapon.damage);
  }
  isAlive() {
    return this.health > 0;
  }
}

class Weapon {
  constructor(type, damage) {
    this.type = type;
    this.damage = damage;
  }
}

// exercise: You're going to build a basic combat system between a Knight and an Enemy.

class Enemy {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }
  takeDamage(amount) {
    this.health -= amount;
  }
  status() {
    if (this.health > 0) {
      console.log(`${this.name} has ${this.health} health remaining`);
    } else {
      console.log(`${this.name} has been defeated!`);
    }
  }
}

const sword1 = new Weapon("sword", 20);
const goblin = new Enemy("Goblin", 35);

const sirArthur = new Knight("Sir Arthur", sword1);
goblin.status();
sirArthur.attack(goblin);
// goblin.takeDamage(sirArthur.weapon.damage);
goblin.status();

sirArthur.attack(goblin);
// goblin.takeDamage(sirArthur.weapon.damage);
goblin.status();
