//https://www.acmicpc.net/problem/15650
//해당 문제는 내가 풀기는 풀었다..
//근데 나중에 보니 그렇게 푸는건 아니였다
//내 코드는 저 아래에 놓았다.
//바로 밑에 코드는 gpt를 이용해서 만든 코드인데 이게 맞는 것 같다
//나는 방문 곳에 대한 arr배열 만들었는데 이거는 중복이 없기 때문에 굳이 만들 필요가 없었다..

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

let N = input[0], M = input[1];
let result = [];
let temp = [];

function backTrack(start, depth) {
    if (depth === M) {
        result.push(temp.join(" "));
        return;
    }

    for (let i = start; i <= N; i++) { // 🔥 'i'를 start부터 시작
        temp.push(i);
        backTrack(i + 1, depth + 1); // 🔥 i+1을 넘겨서 중복 방지
        temp.pop();
    }
}

backTrack(1, 0);
console.log(result.join("\n"));



// 밑에꺼가 내가 만든 코드...
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

let result = [];
let arr = Array(input[0]+1).fill(false);
let temp = [];

function backTrack(depth){
    if(depth === input[1]){
        result.push(temp.join(' '));
        return;
    }
    
    for(let i = 1; i <= input[0]; i++){
        if(!arr[i]){
            if(temp.length !== 0 && temp[temp.length - 1] > i)
                continue;
            arr[i] = true;
            temp.push(i);
            backTrack(depth + 1);
            arr[i] = false;
            temp.pop();
        }
    }
}

backTrack(0);
console.log(result.join("\n"));
