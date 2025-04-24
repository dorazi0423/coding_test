//https://www.acmicpc.net/problem/2083
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const result = [];
for(let value of input){
    const [name, age, weight] = value.split(" ");
    if(name==="#" && age==="0" && weight==="0")
        break;
    else if(age > 17 || weight >= 80)
        result.push(`${name} Senior`); 
    else
        result.push(`${name} Junior`); 
}

console.log(result.join("\n"));
