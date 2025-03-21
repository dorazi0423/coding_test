//https://www.acmicpc.net/problem/10816

const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split('\n');
const N_Array = input[1].split(' ').map(Number).sort((a, b) => a-b);
const M_Array = input[3].split(' ').map(Number);

//왼쪽 인덱스 출력
const leftCheck = (num) => {
    let left = 0;
    let right = Number(input[0]) - 1;
    
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        if(N_Array[mid] < num){
            left = mid + 1;
        }
        else
            right = mid - 1;
    }
    
    return left;
}

//오른쪽 인덱스 출력
const rightCheck = (num) => {
    let left = 0;
    let right = Number(input[0]) - 1;
    
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        if(N_Array[mid] <= num){
            left = mid + 1;
        }
        else
            right = mid - 1;
    }
    
    return right;
}

let result = [];

for(let i=0; i<M_Array.length; i++){
    let leftIndex = leftCheck(M_Array[i]);
    let rightIndex = rightCheck(M_Array[i]);
    result.push(rightIndex-leftIndex+1);
}

console.log(result.join(' '));
