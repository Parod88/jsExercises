import objArr from "./ejercicio2.js";

// Obtener usando map y filter (en el orden que se desee)

// usando MAP
// 1. Array de nombres de personajes de Mario Kart
let marioKartArr = objArr.filter((e) => e.game === "Mario Kart");
marioKartArr = marioKartArr.map((e) => ({ name: `${e.name} ${e.surname}` }));
console.log(marioKartArr);
// 2. Array de nombres y apellidos de super agentes con licencia para matar
let superAgentsArr = objArr.filter((e) => e.allowedToKill);
superAgentsArr = superAgentsArr.map((e) => ({
  name: e.name,
  surname: e.surname,
}));
console.log(superAgentsArr);
// 3. Personajes menores de 40
let under40Arr = objArr.map((e) => ({
  character: `${e.name} ${e.surname}`,
  age: e.age,
}));
under40Arr = under40Arr.filter((e) => e.age < 40);
console.log(under40Arr);
