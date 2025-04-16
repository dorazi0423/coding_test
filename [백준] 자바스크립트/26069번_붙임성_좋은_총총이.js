const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const N = Number(input[0]);
const set = new Set();
set.add("ChongChong");

for(let i=1; i<input.length; i++){
    const arr = input[i].split(" ");
   
    if(set.has(arr[0]) || set.has(arr[1])){
        set.add(arr[0]);
        set.add(arr[1]);
    }
}

console.log(set.size);
