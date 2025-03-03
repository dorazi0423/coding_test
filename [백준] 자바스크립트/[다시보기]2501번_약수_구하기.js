//아래처럼 반복문을 한번만 돌려서 푸는 방법이 존재했다
//시간 복잡도가 O(N)이다
const fs = require("fs");
const [N, K] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

let count = 0;

for (let i = 1; i <= N; i++) {
    if (N % i === 0) {
        count++;
        if (count === K) {
            console.log(i);
            process.exit(); // K번째 약수를 찾으면 바로 종료
        }
    }
}

console.log(0); // K번째 약수가 없으면 0 출력


//난 아래처럼 정렬 알고리즘 써서 풀려고 했었다
//근데 아직 버블정렬을 잘 못하는 것 같다.
//약수 구하는 것도 헷갈린다
const fs = require('fs');
const [N, K] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

let arr = [];

for (let i = 1; i * i <= N; i++) {
    if (N % i === 0) {
        arr.push(i); // i는 약수
        if (i !== N / i) arr.push(N / i); 
    }
}

// 버블 정렬 
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) { // 정렬된 부분 제외
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log(arr.length < K ? 0 : arr[K - 1]);
