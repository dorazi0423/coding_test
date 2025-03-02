//https://www.acmicpc.net/problem/9663
//gpt 이용했다...
//아직 백트리킹을 활용하기에는 부족한 점이 많다
//아래에서는 대각선과 열을 확인하는 check함수 부분이 주요 포인트 부분이다

const fs = require('fs');
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

let arr = Array(input).fill(0); //0으로 초기화
let result = 0;

function check(row){ //대각선과 열을 체크하는 부분
    for(let i=0; i<row; i++){
        //같은 열에 있는지 확인하고, 대각선 확인
        //같은 대각선에 있다면 해당 두 좌표의 열의 증가량과 행의 증가량이 같음
        //예를들어 3,3과 4,2이 있음. 
        //먼저 열의 증가량인 3-4 = |1| 이다 (-1이지만 절대값이라서 1임)
        //행의 증가량은 3 - 2 = 1임. 즉 둘 다 1로 값이 같기 때문에 두 좌표는 대각선에 위치함
        if(arr[row]===arr[i] || Math.abs(arr[row]-arr[i]) === row-i){
            return false;
        }
    }
    
    return true; 
}

function backTrack(row){
    if(row === input){
        result++;
        return;
    }
    
    for(let i=0; i<input; i++){
        arr[row] = i;
        if(check(row)){
            backTrack(row+1);
        }
    }
}

backTrack(0);
console.log(result);
