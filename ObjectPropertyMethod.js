const student = {
  name: "Vishal",
  college: "LPU",
  id: 11607932,
  "no of subject": 4,
};
// Accessing of the value
student.name; // Vishal
student["no of subject"]; //4

// deleting the key value from object (dynamically)
delete student.name;

console.log(student);

// adding the key and value in js object dynamically
student.firstName = "Vishal";
console.log(student);

// Shorthand Property

// In js object if you pass variable inside it , in that case js object will consider that
// varibale as key and it the value which is obtained by variable will become a value of that key
const firstName = "Vishal";
const data = 40;
const obj1 = { firstName, data };
console.log("Shorthan Property::", obj1);

// In js let var const function  return they are reserved keyword you cannot use this reserver keyword  in any variable
// but in case of object this does impact

// let let   = 30; this will give you error

const student1 = {
  const: 30,
  let: "50",
  function: "hey i am function",
  return: 34,
};
console.log("Resreved keyword of js as key::", student1);
// Destructring
