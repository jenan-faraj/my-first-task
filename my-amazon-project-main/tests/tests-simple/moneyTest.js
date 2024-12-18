import { formatCurrency } from "../../scripts/utils/money.js";

console.log("tast suite: formatCurrency");

console.log("converts cents into dillars");

if (formatCurrency(2095) === "20.95") {
  console.log("meow");
} else {
  console.log("meow meow");
}
console.log("works with 0");

if (formatCurrency(0) === "0.00") {
  console.log("meow2");
} else {
  console.log("meow2 meow2");
}
console.log("rounds up to the nearest  cent");

if (formatCurrency(2000.5) === "20.01") {
  console.log("meow3");
} else {
  console.log("meow3 meow3");
}
