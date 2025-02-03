//백준에서 js 사용할 때 

// readline 모듈을 불러오기
const readline = require('readline');

// 입력을 받을 인터페이스 생성
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 두 정수를 입력
rl.question('', (input) => {
  // 입력 받은 값을 공백을 기준으로 나누어 배열로 저장
  const [a, b] = input.split(' ').map(Number);
  
  // 두 수를 더한 결과를 출력
  console.log(a + b);
  
  // 입력 종료
  rl.close();
});
