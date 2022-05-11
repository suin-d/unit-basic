class Stack {
  constructor() {
    this.array = [];
  }

  size() {
    return this.array.length;
  }

  push(item) {
    this.array.push(item);
  }

  pop(item) {
    if (this.array.length === 0) {
      throw new Error('Stack is empty');
    }
    return this.array.pop();
  }

  peek(item) {
    if (this.array.length === 0) {
      throw new Error('Stack is empty');
    }
    return this.array[this.size() - 1]; // 함수에 있는 사이즈 정보 -1, 배열의 마지막 아이템 리턴
  }
}

module.exports = Stack;
