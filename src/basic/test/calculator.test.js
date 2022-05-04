const Calculator = require('../calculator.js');

// 관련된 함수를 묶는 방법
describe('Caculator', () => {
  let cal;
  beforeEach(() => {
    cal = new Calculator(); // calculator 오브젝트 생성
  }); // 수행 전에 새로운 오브젝트 만들기

  it('inits with 0', () => {
    // 0으로 초기화 된다고 이름 지정
    expect(cal.value).toBe(0);
  });

  it('sets', () => {
    cal.set(9);
    expect(cal.value).toBe(9);
  });

  it('clear', () => {
    cal.set(9);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it('adds', () => {
    cal.set(1);
    cal.add(2);
    expect(cal.value).toBe(3);
  });

  it('add should throw an error if value is greater than 100', () => {
    expect(() => {
      cal.add(101);
    }).toThrow('Value can not be greater than 100');
  });

  it('subtracts', () => {
    cal.subtract(1);
    expect(cal.value).toBe(-1);
  });

  it('multiplies', () => {
    cal.set(2);
    cal.multiply(2);
    expect(cal.value).toBe(4);
  });

  // it('divides', () => {
  //   cal.set(4);
  //   cal.divide(2);
  //   expect(cal.value).toBe(2);
  // });

  describe('divides', () => {
    it('0 / 0 === NaN', () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });
    it('1 / 0 === Infinity', () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });
    it('4 / 4 === 1', () => {
      cal.set(4);
      cal.divide(4);
      expect(cal.value).toBe(1);
    });
  });
});
