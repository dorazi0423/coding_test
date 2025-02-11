//그냥 반복문으로 했을 때
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (input) => {
    let N = Number(input);
    let result = 1;

    if (N === 0) {
        console.log(result);  // N이 0일 경우 1 출력
        rl.close();
        return;
    }

    for (let i = 1; i <= N; i++) {
        result *= i;  // i부터 N까지 곱해짐
    }

    console.log(result);

    rl.close();
});

//재귀함수 사용
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function recursion(n) {
    if (n === 0) return 1; 
    return n * recursion(n - 1);
}

rl.question('', (input) => {
    let N = Number(input);
    console.log(recursion(N)); // 함수 호출
    rl.close();
});
