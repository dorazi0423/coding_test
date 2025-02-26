//https://www.acmicpc.net/problem/15649
//백트래킹 알고리즘이다.. 재귀를 사용하는 알고리즘
//늘 못 풀던 문제여서 그냥 gpt로 이번꺼는 풀어봤다
//아래 알고리즘을 익혀서 사용을 해봐야 한다

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

let arr = Array(input[0] + 1).fill(false); //해당 값이 사용되었는지 체크하는 배열
let result = []; //결과 값 배열
let temp = []; //중간에 값 담는 배열

//백트래킹 함수
function backTrack(depth){
    if(depth === input[1]){
        result.push(temp.join(" "));
        return;
    }
    
    for(let i=1; i<=input[0]; i++){
        if(!arr[i]){
            arr[i] = true;
            temp.push(i);
            backTrack(depth+1);
            temp.pop();
            arr[i] = false;
        }
    }
}

backTrack(0);
console.log(result.join('\n'));
