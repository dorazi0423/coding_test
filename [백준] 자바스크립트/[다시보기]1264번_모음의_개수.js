//https://www.acmicpc.net/problem/1264
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let check = ['a', 'e', 'i', 'o', 'u'];

for (let line of input) {
    if (line === "#") break;

    let count = 0;
    for (let char of line) {
        if (check.includes(char.toLowerCase())) {
            count++;
        }
    }

    console.log(count);
}
