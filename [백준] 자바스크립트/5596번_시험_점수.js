const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let score = [];
for(let value of input){
    let num = value.split(" ").reduce((acr, cur)=>acr+Number(cur), 0);
    score.push(num);
}

console.log(score[0]>=score[1] ? score[0]:score[1]);
