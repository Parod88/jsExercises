import objArr from "./ejercicio2.js";

// Reescribir Array.map con forEach
let newArr = objArr.map((e) => ({ fullName: `${e.name} ${e.surname}`, ...e }));
let newArrMyMap = myMap(objArr);
function myMap(inputArr) {
  let createdArr = [];
  inputArr.forEach((item) => {
    createdArr.push({ fullname: `${item.name} ${item.surname}`, ...item });
  });
  return createdArr;
}
// myMap debe devolver lo mismo que la función anónima e =>
//({ fullName: `${e.name} ${e.surname}`, ...e });

console.log(newArr);
console.log(newArrMyMap);
