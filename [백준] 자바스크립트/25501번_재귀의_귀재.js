//https://www.acmicpc.net/problem/25501

const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);

let result = [];
let count = 0;

const recursion = (str, num1, num2) => {
    if(num1 >= num2) {
        result.push([1, count+1]);
    }
    else if(str[num1] != str[num2]) {
        result.push([0, count+1]);
    }
    else {
        count++;
        recursion(str, num1+1, num2-1);
    }

    count = 0;
}

const isPalindrome = (str) => {
    recursion(str, 0, str.length - 1);
}

for(let i=1; i<input.length; i++){
    isPalindrome(input[i]);
}

for(const res of result){
    console.log(res.join(' '));
}
