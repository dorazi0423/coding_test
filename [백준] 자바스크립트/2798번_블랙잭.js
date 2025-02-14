//https://www.acmicpc.net/problem/2798

const readline=require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    ouput:process.stdout
});

rl.question('',(input)=>{
    let [N, M] = input.split(' ').map(Number);
    
    rl.on('line',(line)=>{
        let arr = line.split(' ').map(Number);
        let sum = [];
        
        for(let i=0; i<arr.length-2; i++){
            for(let j=i+1; j<arr.length-1; j++){
                for(let k=j+1; k<arr.length; k++){
                    let num = arr[i]+arr[j]+arr[k];
                    
                    if(num<=M) sum.push(num);
                }
            }
        }
        console.log(Math.max(...sum));
        rl.close();
    });
})
