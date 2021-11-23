// Escribir de todas las maneras posibles (funciones, arrow functions...) la función mcd https://es.wikipedia.org/wiki/M%C3%A1ximo_com%C3%BAn_divisor
function mcd(numbers) {
  // do whatever
  return 1;
}

const euclidesMCD = function (a, b) {
  let saveNumber;
  while (b !== 0) {
    saveNumber = b;
    b = a % b;
    a = saveNumber;
  }
  return a;
};

const recursiveEuclidesMCD = (a, b) => {
  if (b === 0) return a;
  return recursiveEuclidesMCD(b, a % b);
};

const threeOrMoreNumbersMCD = function (a, b, c) {
  euclidesMCD(a, euclidesMCD(b, c));
  return a;
};

console.log(euclidesMCD(1496, 238));

console.log(recursiveEuclidesMCD(1496, 238));

console.log(threeOrMoreNumbersMCD(256, 128, 64));
