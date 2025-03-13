//https://www.acmicpc.net/problem/24416

const fs = require('fs');
const input = Number(fs.readFileSync("/dev/stdin").toString());
    
let count = [1, 0];

const fib = (n) => {
    if (n == 1 || n == 2) {
        return 1;  
    }
    else {
        count[0]++;
        return (fib(n - 1) + fib(n - 2));
    }
}


const fibonacci = (n) => {
    let f = new Array(n + 1);
    f[1] = 1;  
    f[2] = 1;  

    for (let i = 3; i <= n; i++) {
        count[1]++
        f[i] = f[i - 1] + f[i - 2];
    }

    return f[n];
};

fib(input);
fibonacci(input);
console.log(count.join(' '));
