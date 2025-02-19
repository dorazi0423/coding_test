//https://www.acmicpc.net/problem/11866
//나는 앞에 있는 것들을 잘라서 뒤에 붙이는 식으로 코드를 짰다
//그런데  index = (index + K - 1) % arr.length; 이런식으로 해당 인덱스 값을 알아오는 방식이 있었다
//앞으로도 이런식으로 구하는 게 좋을 것 같다

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    let [N, K] = line.split(' ').map(Number);
    let arr = [];
    let result = [];
    let index = 0;
    
    for (let i = 1; i <= N; i++) {
        arr.push(i);
    }

    while(arr.length > 0){
        index = (index + K - 1) % arr.length;
        result.push(arr[index]);
        arr.splice(index, 1);
    }
    
    console.log("<" + result.join(', ') + ">");
    
    rl.close();
});
