// function Employee(name) {}

// const emp1 = new Employee('vishal);

// classes are nothing they are also type of fucntion

class Employee {
  // this => {}
  constructor(name) {
    this.name = name;
  }

  // function
  printName() {
    console.log(this.name);
  }

  // setter
  set setName(value) {
    if (value.length >= 1) this.name = value;
    else throw Error("Name should not be less than zero");
  }

  // getter
  get getName() {
    return this.name;
  }
}

// oops
console.log(typeof Employee); // function

const emp1 = new Employee("Vishal");
console.log(emp1);
emp1.setName = "TIm tom";

emp1.printName();

console.log(emp1.getName);

//  20%
// inheritance
// polymorphism
// overriding
// super
// constructor
// parent method
// privarte

class Vehicle {
  constructor(brand, name, color, tyre) {
    this.brand = brand;
    this.name = name;
    this.color = color;
    this.tyre = tyre;
  }
  getVehicleName() {
    return this.name;
  }
  getVehicleColor() {
    return this.color;
  }
  getVehicleTyre() {
    return this.tyre;
  }
  speed(value) {
    console.log("this is the speed", value);
  }
}

class FourWheeler extends Vehicle {
  constructor(...args) {
    // args  =>
    super(...args);
  }
  getMileage(value) {
    console.log("this is the mileage", value);
  }
  // overriding
  getVehicleTyre() {
    return super.getVehicleTyre();
  }
}

const four = new FourWheeler("mahindra", "xuv700", "black", 4);
four.speed(200);
four.getMileage(400);
console.log(four.getVehicleName());

console.log(four);

// Private  member and method in Javascipt classes

class Newton {
  #studentCount = 0; // class member and field
  set setStudentCount(value) {
    this.#studentCount = value;
  }
  get studentCount() {
    return this.#studentCount;
  }
}

const obj = new Newton();
// console.log(obj.#studentCount); error
obj.setStudentCount = 30;
console.log(obj.studentCount);

// function Newton() {
//   // this  => {}
//   this.studentCount = 0;
// }
// const obj1 = new Newton();
