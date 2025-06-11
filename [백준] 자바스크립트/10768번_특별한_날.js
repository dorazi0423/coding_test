//https://www.acmicpc.net/problem/10768

const [month, day] = require("fs").readFileSync("/dev/stdin").toString().split("\n").map(Number);

if(month > 2){
    console.log("After");
}else if(month < 2){
    console.log("Before");
}else if(day > 18){
    console.log("After");
}else if(day < 18){
    console.log("Before");
}else{
    console.log("Special");
}
