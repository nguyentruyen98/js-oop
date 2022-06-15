// Abstraction: And abstraction basically means to ignore or to hide details that don't matter. This allows us to get an overview perspective
// of whatever it is that we're implementing instead of messing with details that don't really matter to our implementation.
// Ví dụ: người dùng k cần biết điện thoại bao gồm những gì bên trong nó mà chỉ quan tâm đến các chức năng của nó.---> Ẩn những chi tiết k cần thiết
// đối với người dùng.
//----------------------------------------------------------------
// Encapsulation: And encapsulation basically means to keep some properties and methods private inside the class so that they're not accessible
// from outside the class. ---> prevent external code from accidentally manipulating this internal properties/state., Allow to change internal implementation
// without the risk of breaking external code
//----------------------------------------------------------------
// Inheritance: inheritance makes all properties and methods of a certain class available to a child class, which of course then forms a hierarchy
// between these two classes. ----> And the goal of this is to reuse logic that is common to both of the classes.
//----------------------------------------------------------------
// Polymorphism: polymorphism means that a child class can overwrite a method that it inherited from a parent class.

// Prototype <------- Object (all objects in JavaScript are linked to a certain prototype object)
// Prototypal inheritance means that all objects that are linked to a certain prototype object can use the methods and properties that are defined on
// that prototype.
//----------------------------------------------------------------
// Constructor function
// - technique to create object from a function
// - this is how to build-in object like Array, Maps or Sets are actually implemented.
// -
// ES6 classes
// - modern way of doing OOP in JavaScript.
// -They are instead just so called 'synthetic sugar' over constructor functions. So this means that ES6 classes are basically just a layer of
// obstruction over constructor functions.
// Object.create().
// -easiest and most straightforward way of linking an object to a prototype object.
