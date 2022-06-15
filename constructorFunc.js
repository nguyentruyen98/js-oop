"use strict";

const Person = function (firstName, birthDate) {
  this.firstName = firstName;
  this.birthDate = birthDate;
};

const tr = new Person("Truyen", 1998);

// 1. new {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

console.log(tr instanceof Person); //true

// Prototype
//- So, first each and every function in JavaScript automatically has a property called prototype. Now every object that's created by a certain
// constructor function will get access to all the methods and properties that we define on the constructors prototype property.
Person.prototype; //Object
Person.prototype.getName = function () {
  return this.firstName;
};
// Nó chỉ tồn tại trên Person, trong instance không có, mà chỉ nằm trong __proto__
tr.__proto__;
// https://www.javascripttutorial.net/javascript-constructor-prototype/

// The new operator:
// 1. An empty object is created
// 2. This keyword in constructor function call is set to the new object, this is now the new empty object
// 3. The new object is linked (__proto__property) to the constructor function's prototype property, __proto__ always points to an object's prototype
// 4. The new object is returned from the constructor function call

// Well, if a property or a method cannot be found in a certain object JavaScript will look into its prototype and there it is.---> prototype chain

// Object.prototype (top of prototype chain);
console.log(tr.__proto__.__proto__);

Person.prototype.constructor; // Function itself
