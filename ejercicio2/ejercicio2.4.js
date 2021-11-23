import objArr from "./ejercicio2.js";

// Reescribir Array.some una vez con do..while
let newArr = objArr.some((e) => e.allowedToKill && e.age >= 55);
let newArrMySome = mySome(objArr);
function mySome(inputArr) {
  let i = 0;
  do {
    if (inputArr[i].allowedToKill && inputArr[i].age >= 55) {
      return true;
    }
    i++;
  } while (i < inputArr.length);
  return false;
} // mySome debe devolver lo mismo que la función anónima e => e.allowedToKill && age >= 55

console.log(newArr);
console.log(newArrMySome);
