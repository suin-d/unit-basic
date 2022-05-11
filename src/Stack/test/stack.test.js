const Stack = require('../stack');
const StubStackClient = require('../test/stub_stack');

describe('Stack', () => {
  // stack의 api 이용
  let stack;
  beforeEach(() => {
    stack = new Stack();
  }); //독립적으로 각각의 테스트 수행 위해

  it('is created empty', () => {
    expect(stack.size()).toBe(0);
  });

  it('allows to push items', () => {
    stack.push('😍');
    expect(stack.size()).toBe(1);
  });

  describe('pop', () => {
    it('throw an error if stack is empty', () => {
      expect(() => {
        stack.pop();
      }).toThrow('Stack is empty');
    });
    it('returns the last item and removes it from the stack', () => {
      stack.push('😲');
      stack.push('🤨');
      expect(stack.pop()).toBe('🤨'); // pop을 리턴하면 마지막 요소 나와야
      expect(stack.size()).toBe(1);
    });
  });

  describe('peek', () => {
    it('throw an error if stack is empty', () => {
      expect(() => {
        stack.peek();
      }).toThrow('Stack is empty');
    });
    it('return the last pushed item but keeps it in the stack', () => {
      stack.push('😲');
      stack.push('🤨');
      expect(stack.peek()).toBe('🤨');
      expect(stack.size()).toBe(2); // 마지막에 뭐가 들었는지 확인
    });
  });
});
