//https://www.acmicpc.net/problem/28278

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let stack = [];
let output = [];//console.log로 각각 찍으면 시간초과가 발생함.


rl.question('', (input) => {
    let N = Number(input); // 명령 수
    let count = 0; // 카운트

    rl.on('line', (line) => {
        let num = line.split(' ').map(Number);

        switch (num[0]) {
            case 1:
                // 1 X: 정수 X를 스택에 넣는다. (1 ≤ X ≤ 100,000)
                stack.push(num[1]);
                break;
            case 2:
                // 2: 스택에 정수가 있다면 맨 위의 정수를 빼고 출력한다. 없다면 -1을 대신 출력한다.
                if (stack.length === 0) {
                    output.push(-1);
                } else {
                    output.push(stack.pop());
                }
                break;
            case 3:
                // 3: 스택에 들어있는 정수의 개수를 출력한다.
                output.push(stack.length);
                break;
            case 4:
                // 4: 스택이 비어있으면 1, 아니면 0을 출력한다.
                if (stack.length === 0) {
                    output.push(1);
                } else {
                    output.push(0);
                }
                break;
            case 5:
                // 5: 스택에 정수가 있다면 맨 위의 정수를 출력한다. 없다면 -1을 대신 출력한다.
                if (stack.length === 0) {
                    output.push(-1);
                } else {
                    output.push(stack[stack.length - 1]);
                }
                break;
        }

        count++;
        if (count === N) {
            // 모든 명령이 끝나면 한 번에 출력
            console.log(output.join('\n'));
            rl.close(); // 종료
        }
    });
});
