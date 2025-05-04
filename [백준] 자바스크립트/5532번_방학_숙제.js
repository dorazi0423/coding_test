//https://www.acmicpc.net/problem/5532
const [L, korPage, mathPage, korDayPage, mathDayPage] = require("fs").readFileSync("/dev/stdin").toString().split("\n").map(Number);
let korEndDay = Math.ceil(korPage / korDayPage);
let mathEndDay = Math.ceil(mathPage / mathDayPage);
console.log(L - Math.max(korEndDay, mathEndDay));
