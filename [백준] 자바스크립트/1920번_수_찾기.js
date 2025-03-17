//https://www.acmicpc.net/problem/1920

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let NArray = input[1].split(' ').map(Number).sort((a, b) => a-b); //확인하려는 배열
let MArray = input[3].split(' ').map(Number);


//해당 숫자가 있는지 확인
const checkNum = (num, arr) => {
    let left = 0;
    let right = arr.length - 1;
    
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        
        if(arr[mid] === num)
            return 1;
        else if(arr[mid] < num)
            left = mid + 1;
        else if(arr[mid] > num)
            right = mid - 1;
    }
    
    return 0;
}

for(let value of MArray){
    console.log(checkNum(value, NArray));
}
