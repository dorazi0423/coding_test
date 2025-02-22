//gpt의 도움을 받아서 다시 작성해본 코드이다
//덱 자료구조에 대해 이해가 필요
//배열보다는 이중연결리스트를 통해서 구하는게 시간초과를 막을 수 있음

const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

//노드
class Node {
    constructor(value) {//생성자, value값을 넣어주어야 한다
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

//덱 클레스
class Deque {
    constructor() {//생성자
        this.size = 0;
        this.head = null; //첫번째 노드에 대한 주소값이 할당
        this.tail = null; //마지막 노드에 대한 주소값이 할당
    }

    //맨 앞에 값을 추가
    unshift(value) {
        const node = new Node(value); //새로운 노드를 생성

        if (this.size === 0) //만약에 덱이 비어있다면
            this.head = this.tail = node;
        else {
            node.next = this.head; //새로운 노드의 next는 this.head가 된다
            this.head.prev = node; //this.head의 이전 노드는 새로 생성된 노드임
            this.head = node; //이후에 현재 head에 새로 생성한 노드의 주소값을 할당
        }
        this.size++;
    }

    //마지막에 값을 추가함
    push(value) {
        const node = new Node(value);

        if (this.size === 0)
            this.head = this.tail = node;
        else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    //첫번째 값을 제거
    shift() {
        if (this.size === 0) return -1;

        const value = this.head.value; //값
        this.head = this.head.next; //현재 head의 주소를 head.next 주소로 바꾸어줌

        if (this.head) this.head.prev = null; //만약 맨 this.head 노드가 있다면
        else this.tail = null; //없다면 값이 없다는 의미므로 this.tail=null을 해줌

        this.size--;
        return value;
    }

    //마지막 값을 제거
    pop() {
        if (this.size === 0) return -1;

        const value = this.tail.value;
        this.tail = this.tail.prev;

        if (this.tail) this.tail.next = null;
        else this.head = null;

        this.size--;
        return value;
    }

    getSize() { //전체 크기 반환
        return this.size;
    }

    isEmpty() {//비어있는지 확인
        return this.size === 0 ? 1 : 0;
    }

    getHead() {//맨 앞 값 리턴
        return this.size === 0 ? -1 : this.head.value;
    }

    getTail() {//맨 뒤 값 리턴
        return this.size === 0 ? -1 : this.tail.value;
    }
}

// 입력 처리
const deque = new Deque();
let result = [];

// 첫 번째 줄은 명령어 개수이므로 이를 제외하고 명령어 처리
for (let i = 1; i < input.length; i++) {
    const check = input[i].split(" ");

    switch (check[0]) {
        case "1":
            deque.unshift(Number(check[1]));
            break;
        case "2":
            deque.push(Number(check[1]));
            break;
        case "3":
            result.push(deque.shift());
            break;
        case "4":
            result.push(deque.pop());
            break;
        case "5":
            result.push(deque.getSize());
            break;
        case "6":
            result.push(deque.isEmpty());
            break;
        case "7":
            result.push(deque.getHead());
            break;
        case "8":
            result.push(deque.getTail());
            break;
    }
}

// 결과 출력
console.log(result.join("\n"));
