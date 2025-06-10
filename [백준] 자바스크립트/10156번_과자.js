//https://www.acmicpc.net/problem/10156

const [cost, count, money] = require("fs").readFileSync("/dev/stdin").toString().split(" ").map(Number);
const result = (cost * count) - money;

if(result > 0){
    console.log(result);
}else{
    console.log(0);
}
