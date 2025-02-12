const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('',(input)=>{
    let S = input;

    rl.on('line', (line)=>{
        let i = Number(line);
        console.log(S[i-1]);

        rl.close();
    });
});
