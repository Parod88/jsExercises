import objArr from "./ejercicio2.js";

// Reescribir Array.every una vez con filter y otra con for
let newArr = objArr.every((e) => e.name.length > 4 && e.age >= 18);
let newArrMyEvery = myEvery(objArr);
function myEvery(inputArr) {
  let arrToFilter = inputArr.filter((e) => e.name.length > 4 && e.age >= 18);
  console.log(arrToFilter);
  console.log(arrToFilter.length);
  return arrToFilter.length !== inputArr.length ? false : true;
}
// myEvery debe aplicar el mismo criterio que la función anónima e => e.name.length > 4 && age >= 18

console.log(objArr.length);
console.log(objArr);
console.log(newArr);
console.log(newArrMyEvery);

function myEvery(inputArr) {
  let arrToCompare = [];
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i].name.length > 4 && inputArr[i].age >= 18) {
      arrToCompare.push(inputArr[i]);
    }
  }
  console.log(arrToCompare);
  console.log(arrToCompare.length);
  return arrToCompare.length !== inputArr.length ? false : true;
}
