//https://www.acmicpc.net/problem/25305

const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

for(let i=0; i<arr.length-1; i++){
    for(let j=0; j<arr.length; j++){
        if(arr[j] < arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}

console.log(arr[k-1]);
