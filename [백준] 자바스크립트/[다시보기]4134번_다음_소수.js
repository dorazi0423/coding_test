//못 풀었다..gpt 코드다..
//백준에서는 readline보다는 fs사용하는 것이 속도면에서 좋다고 한다.
//readline이 메모리적으로는 좋지만 백준같은 코테에서는 아래처럼 써보자

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

//처음 입력받은 입력개수는 빼준다
input.shift();

//함수 -> 소수인지 아닌지 판별해해줌
const isPrime = (n) => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

let result = [];//결과값

//배열 값을 출력
//인덱스가 아닌 배열 값을 추출하는 반복문
for (let num of input) {
  //만약에 소수가 아니라면 num++
    while (!isPrime(num)) {
        num++;
    }
    result.push(num);
}

console.log(result.join("\n"));
