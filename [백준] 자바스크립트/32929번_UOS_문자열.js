//https://www.acmicpc.net/submit/32929/93880759
let input = Number(require("fs").readFileSync("/dev/stdin").toString())-1;
let word = "UOS";

console.log(word[input%3]);
