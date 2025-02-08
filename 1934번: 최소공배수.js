//꼭 다시보기...!
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 최대 공약수 (GCD) 구하는 함수
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// 최소 공배수 (LCM) 구하는 함수
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

rl.question('', (input) => {
    let T = Number(input); // 테스트 케이스 수
    let result = new Array(T); // 결과 저장 배열
    
    let count = 0; // 읽은 테스트 케이스 수
    
    rl.on('line', (line) => {
        let arr = line.split(' ').map(Number); // 각 테스트 케이스 숫자들
        
        let a = arr[0];
        let b = arr[1];
        
        // 최소 공배수 계산
        result[count] = lcm(a, b); // 두 수의 최소 공배수를 구하여 저장
        
        count++;
        
        if (count === T) {
            rl.close(); // 입력이 끝나면 종료
        }
    });

    rl.on('close', () => {
        console.log(result.join('\n')); // 결과 출력
    });
});
