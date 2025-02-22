// 1.
let name = "noona's fruit store";
let fruits = ["banana", "apple", "mango"];
let address = "Seoul";

let store = { name, fruits, address };
console.log(store);

// 2.
console.log(
  `제 가게 이름은 ${store.name} 입니다. 위치는 ${store.address} 에 있습니다`
);

// 3.
function calculate({ a, b, c }) {
  return a + b + c;
}
console.log(calculate({ a: 1, b: 2, c: 3 }));

// 4.
let name2 = "noona store";
let fruits2 = ["banana", "apple", "mango"];
let address2 = {
  country: "Korea",
  city: "Seoul",
};

function findStore({ name, address: { city } }) {
  return name === "noona store" && city === "Seoul";
}
console.log(findStore({ name: name2, fruits: fruits2, address: address2 }));

// 5.
function getNumber() {
  let array = [1, 2, 3, 4, 5, 6];
  let [first, , third, forth] = array;
  return { first, third, forth };
}
console.log(getNumber());

// 6.
function getCalendar(first, ...rest) {
  return (
    first === "January" &&
    rest[0] === "Febuary" &&
    rest[1] === "March" &&
    rest[2] === undefined
  );
}
console.log(getCalendar("January", "Febuary", "March"));

// 7.
function getMinimum() {
  let a = [45, 23, 78];
  let b = [54, 11, 9];
  return Math.min(...a, ...b);
}
console.log(getMinimum());

// 8.
const sumNumber = () => {
  const sum = (a, b) => a + b;
  return sum(40, 10);
};
console.log(sumNumber());

// 9.
const sumNumber2 = () =>
  (
    (a) => (b) => (c) =>
      a + b + c
  )(1)(2)(3);
console.log(sumNumber2());

// 배열함수
let names = [
  "Steven Paul Jobs",
  "Bill Gates",
  "Mark Elliot Zuckerberg",
  "Elon Musk",
  "Jeff Bezos",
  "Warren Edward Buffett",
  "Larry Page",
  "Larry Ellison",
  "Tim Cook",
  "Lloyd Blankfein",
];

let firstQu = names.map((item) => item.toUpperCase());
console.log(firstQu);

let firstQu2 = names.map((item) => item.split(" ")[0]);
console.log(firstQu2);

let firstQu3 = names.map((item) =>
  item
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
);
console.log(firstQu3);

let secondQu = names.filter((item) => item.includes("a"));
console.log(secondQu);

let secondQu2 = names.filter((item) => item.toLowerCase().includes("a"));
console.log(secondQu2);

let some = names.some((item) => item.length >= 20);
console.log(some);

let some2 = names.some((item) => {
  let firstName = item.split(" ")[0];
  return firstName.toLowerCase().includes("p");
});
console.log(some2);

let every = names.every((name) => name.length >= 20);
console.log(every);

let every2 = names.every((name) => name.toLowerCase().includes("a"));
console.log(every2);

let find = names.find((name) => name.length >= 20);
console.log(find);

let find2 = names.find((name) => name.split(" ").length > 2);
console.log(find2);

let findIndex = names.findIndex((name) => name.length >= 20);
console.log(findIndex);

let findIndex2 = names.findIndex((name) => name.split(" ").length > 2);
console.log(findIndex2);
