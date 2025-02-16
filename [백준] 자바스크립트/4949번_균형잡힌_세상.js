//https://www.acmicpc.net/problem/4949

//내가 짠 코드
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

let result = [];

rl.on('line', (line) => {
    if (line === ".") {
        console.log(result.join('\n'));
        rl.close();
    }

    let str = line.split('');
    let check = [];
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "]" && check[check.length - 1] === "[") {
            check.pop();
        } else if (str[i] === ")" && check[check.length - 1] === "(") {
            check.pop();
        } else if (["(", ")", "[", "]"].includes(str[i])) {
            check.push(str[i]);
        }
    }
    
    result.push(check.length === 0 ? "yes" : "no");
});



//gpt로 짠 코드 -> 이게 반복을 덜 해서 이걸로 앞으로 하는게 좋을 것 같다
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let result = [];

rl.on('line', (line) => {
    if (line === ".") {
        console.log(result.join('\n'));
        rl.close();
        return;
    }

    let check = [];
    let isBalanced = true;

    for (let char of line) {
        if (char === "(" || char === "[") {
            check.push(char);
        } else if (char === ")") {
            if (check.pop() !== "(") {
                isBalanced = false;
                break;
            }
        } else if (char === "]") {
            if (check.pop() !== "[") {
                isBalanced = false;
                break;
            }
        }
    }

    result.push(isBalanced && check.length === 0 ? "yes" : "no");
});
