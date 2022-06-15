class Person {
  constructor(fullName, birthDate) {
    this.fullName = fullName;
    this.birthDate = birthDate;
  }
  //Method will be added to .prototype property
  getName() {
    return this.firstName;
  }

  get age() {
    return 2037 - this.birthDate;
  }
  // tên method phải giống tên thuộc tính
  // Tự động chạy khi dòng this.fullName = fullName; được thực thi
  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert("No");
  }
  get fullName() {
    return this._fullName;
  }
  // Static method
  static hey() {
    console.log("Hey!!!!!");
  }
}
Person.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
const jessica = new Person("Jessica hah", 1996);
// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are excuted in strict mode

// Geters and Setters
// Static method
