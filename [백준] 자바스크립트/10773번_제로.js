//https://www.acmicpc.net/problem/10773

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (input) => {
    let K = Number(input);
    let heap = [];
    let count = 0;

    rl.on('line', (line) => {
        let num = Number(line);

        // 0이면 가장 최근에 넣은 수를 제거하고, 그렇지 않으면 숫자를 추가
        if (num !== 0) {
            heap.push(num);
        } else {
            heap.pop();
        }

        count++;

        // count가 K가 되면 합을 출력
        if (count === K) {
            let sum = heap.reduce((acc, cur) => acc + cur, 0);
            console.log(sum);
            rl.close();  // 입력을 종료하여 프로그램이 종료되도록 함
        }
    });
});
