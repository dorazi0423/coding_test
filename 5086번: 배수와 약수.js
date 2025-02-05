const readline=require('readline');
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr = [];
let count = 0;

rl.on('line',(line)=>{
    let [a, b] = line.split(' ').map(Number);

    if(a===0 && b===0){
        for(let i=0; i<arr.length; i++)
              console.log(arr[i]);
          rl.close();
     }
    
    if(b%a===0) arr[count]="factor";
    else if(a%b===0) arr[count]="multiple";
    else arr[count]="neither";

    count++;
});
