//https://www.acmicpc.net/problem/1654
//랜선의 길이가 N값보다 커도 된다는 것이 이 문제에서 헷갈리는 부분이었다
//전체적으로 코드를 만들기는 했는데 그 부분에서 많이 헤매었다

const input = require('fs').readFileSync("/dev/stdin").toString().split('\n');
const [K, N] = input[0].split(' ').map(Number);
const arr = input.slice(1, input.length).map(Number);
const max = Math.max(...arr);

//이분탐색으로 랜선의 최대 길이를 센티미터 단위로 출력하는 함수
const cutLan = (arr) =>{
    let left = 1;
    let right =  max;
    let result = 0;
    
    while(left <= right){
        let mod = Math.floor((left + right) / 2);
        let count = countLan(mod);
        
        if(count >= N){
            left = mod + 1;
            result = mod;
        }else if(count < N){
            right = mod - 1;
        }
    }

    return result;
}

//해당 길이로 구할 수 있는 랜선의 개수
const countLan = (length) => {
    let count = 0;
    for(let i=0; i < K; i++){
        count += Math.trunc(arr[i] / length);
    }
    return count;
}

console.log(cutLan(arr));
