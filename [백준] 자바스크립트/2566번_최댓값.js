const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let max = -1;
let x = 0;
let y = 0;

for (let i = 0; i < input.length; i++) {
    const arr = input[i].split(" ").map(Number);

    for (let j = 0; j < arr.length; j++) {
        if (arr[j] > max) {
            max = arr[j];
            x = i + 1;
            y = j + 1;
        }
    }
}

console.log(max);
console.log(x + " " + y);
