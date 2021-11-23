import objArr from "./ejercicio2.js";

//Reescribir Array.filter con while
let newArr = objArr.filter((e) => e.allowedToKill && e.age <= 50);
let newArrMyFilter = myFilter(objArr);

function myFilter(inputArr) {
  let myFilterArr = [];
  let i = 0;
  while (i < inputArr.length) {
    if (inputArr[i].allowedToKill && inputArr[i].age <= 50) {
      myFilterArr.push(inputArr[i]);
    }
    i++;
  }
  return myFilterArr;
}

console.log(newArr);
console.log(newArrMyFilter);

// myFilter debe devolver lo mismo que la función anónima
//e => e.allowedToKill && e.age <= 50
