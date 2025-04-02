const input = require("fs").readFileSync("/dev/stdin").toString();
const result = [];

for(let i=0; i<input.length; i++){
    if(input.charCodeAt(i) >= 97)
        result.push(input.charAt(i).toUpperCase());
    else
        result.push(input.charAt(i).toLowerCase());
}

console.log(result.join(''))
