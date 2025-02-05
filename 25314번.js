const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('',(input)=>{
    const N = Number(input);
    let result="";
    
    for(let i=0; i<N/4; i++){
        result+="long ";
    }
    
    console.log(result+"int");
    
    rl.close();
})
