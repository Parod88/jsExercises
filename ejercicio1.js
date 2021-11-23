// Reescribir este loop 5 veces, una con for..of, otra con for..in,
//otra con forEach, otra con while, y otra con do..while:

const items = [
  "Hello",
  "World",
  3,
  { name: "Super Mario", game: "Mario Kart" },
];
let newArr = [];
for (let i = 0; i < items.length; i++) {
  newArr.push(items[i]);
}

for (item of items) {
  newArr.push(item);
}

for (item in items) {
  newArr.push(items[item]);
}

items.forEach((item) => newArr.push(item));
let i = 0;
while (i < items.length) {
  newArr.push(items[i]);
  i++;
}

let t = 0;
do {
  newArr.push(items[t]);
  t++;
} while (t < items.length);

console.log(items);

console.log(newArr);
