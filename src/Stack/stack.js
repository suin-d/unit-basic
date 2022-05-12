class Stack {
  constructor() {
    this._size = 0; // 사이즈 정보 수동
    this.head = null; // 다음 아이템을 가리킬 오브젝트
  }

  size() {
    return this._size;
  }

  push(item) {
    const node = { item, next: this.head }; // 하나의 아이템, 전달받은 아이템과 다음에 가리킬 것이 들어있는 오브젝트
    this.head = node; // 헤드가 새로운 노드 가리킴
    this._size++;
  }

  pop(item) {
    if (this.head === null) {
      throw new Error('Stack is empty');
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.item;
  }

  peek(item) {
    if (this.head === null) {
      throw new Error('Stack is empty');
    }
    return this.head.item; // 함수에 있는 사이즈 정보 -1, 배열의 마지막 아이템 리턴
  }
}

module.exports = Stack;
