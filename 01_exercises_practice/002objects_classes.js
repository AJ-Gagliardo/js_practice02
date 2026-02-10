class Book {
  constructor(title, author, pages, currentPage) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.currentPage = currentPage;
  }
  read() {
    if (this.currentPage <= this.pages) {
      this.currentPage += 1;
      console.log("reading..");
    } else {
      console.log("you finished the book!");
    }
  }
}

const artOfWar = new Book("The Art of War", "Sun Tzu", 3, 1);

// console.log(artOfWar);
// artOfWar.read(1);
// console.log(artOfWar);
// artOfWar.read(1);
// artOfWar.read(1);
// artOfWar.read(1);

class Character {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
  }
  status() {
    console.log(`${this.name}'s hp = ${this.hp}`);
  }
}
class Warrior extends Character {
  constructor(name, hp, equippedWeapon) {
    super(name, hp);

    this.equippedWeapon = equippedWeapon;
  }
  attack(enemy) {
    console.log(enemy.hp);
    enemy.hp = enemy.hp - this.equippedWeapon.damage;
    console.log(enemy.hp);
    console.log(
      `${this.name} has attacked ${enemy.name} with ${this.equippedWeapon.name} dealing ${this.equippedWeapon.damage} damage`,
    );
    if (enemy.hp <= 1) {
      console.log(`${enemy.name} was defeated!`);
    } else {
      console.log(`${enemy.name} remaining hp = ${enemy.hp}`);
    }
  }
}

class Mage extends Character {
  constructor(name, hp, mana) {
    super(name, hp);
    this.mana = mana;
  }
  castSpell(enemy) {
    this.mana = this.mana - 5;
    if (enemy.hp >= 1) {
      console.log(
        `${this.name} casts a spell and deals 10 damage to ${enemy.name}`,
      );
      enemy.hp = enemy.hp - 10;
    } else {
      console.log("${enemy.name} defeated!");
    }
  }
}

class Weapon {
  constructor(name, damage) {
    this.name = name;
    this.damage = damage;
  }
}

const longSword = new Weapon("long sword", 5);
const rustySword = new Weapon("rusty sword", 3);

const warriorA = new Warrior("A", 10, longSword);
const warriorB = new Warrior("B", 10, rustySword);

warriorA.attack(warriorB);
warriorA.attack(warriorB);
