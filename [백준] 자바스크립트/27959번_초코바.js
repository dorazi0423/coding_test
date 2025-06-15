const [N, M] = require("fs").readFileSync("/dev/stdin").toString().split(" ").map(Number);

if(N*100 < M)
    console.log("No");
else
    console.log("Yes");
