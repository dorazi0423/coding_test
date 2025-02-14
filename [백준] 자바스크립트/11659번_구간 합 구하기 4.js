//https://www.acmicpc.net/problem/11659

const readline=require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let line = [];

rl.on('line',(input)=>{
    line.push(input.split(' ').map(Number));
})

rl.on('close',(close)=>{
    let [N, M]=line[0]
    let arr = line[1];
    let check = line.slice(2);
    let result = []

    //부분합을 미리 구해놔서 메모리 초과를 방지한다.
    let prefixSum = [0];  
    for (let i = 1; i <= N; i++) {
        prefixSum[i] = prefixSum[i - 1] + arr[i - 1];
    }

    // 구간 합 계산
    for (let i = 0; i < M; i++) {
        let [start, end] = check[i];
        result[i] = prefixSum[end] - prefixSum[start - 1];
    }
    
    console.log(result.join('\n'))

    rl.close();
})
