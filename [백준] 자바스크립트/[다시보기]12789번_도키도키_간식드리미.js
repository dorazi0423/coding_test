//https://www.acmicpc.net/problem/12789
//스택

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (input) => {
    let N = Number(input);
    
    rl.on('line', (line) => {
        let arr = line.split(' ').map(Number);
        let check = 1;
        let stack = [];
        
        for (let i = 0; i < N; i++) {
            if (arr[i] === check) {
                check++; // 바로 간식 줌
            } else {
                stack.push(arr[i]); // 보조 줄에 보관
            }

            // 보조 줄에 있는 학생들도 순서에 맞으면 즉시 간식
            while (stack.length > 0 && stack[stack.length - 1] === check) {
                stack.pop();
                check++;
            }
        }

        // 남은 학생들도 순서 확인
        while (stack.length > 0) {
            if (stack.pop() !== check) {
                console.log("Sad");
                return;
            }
            check++;
        }

        console.log("Nice");
        rl.close();
    });
});
