const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('',(input)=>{
    let [N, M]=input.split(' ').map(Number);
    
    rl.on('line',(line)=>{
        let arr = line.split(' ').map(Number);
        let left = 0;
        let right = Math.max(...arr)-1;

        while(left <= right){
            let mid = Math.floor((left+right)/2)
            let totalReduction = 0;

            for(let i=0;i<N; i++){
                if(arr[i] > mid){
                    totalReduction += arr[i] - mid;
                }
            }

            if(totalReduction >= M){
                left = mid+1;
            }else{
                right=mid-1;
            }
        }
        
        console.log(right);
        rl.close();
    });
});
