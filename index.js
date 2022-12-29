const isEven = require("is-even");
const isIsEven = require("is-is-even");

const simpleIsEven = (n) => {
  if (typeof n === "number" || n instanceof Number) return n % 2 === 0;
  throw TypeError("Expected a number");
};

const sneaky = "sneaky";
isEven.toString = () => "sneaky";

console.log("is-even in is-is-even", isIsEven(isEven));
console.log("simpleIsEven in is-is-even", isIsEven(simpleIsEven));
console.log("sneaky in is-is-even", isIsEven(sneaky));
console.log("is-is-even in is-is-even", isIsEven(isIsEven));
