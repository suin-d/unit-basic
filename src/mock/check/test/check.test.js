const check = require('../check');

describe('check', () => {
  let onSuccess;
  let onFail;

  // 초기화
  beforeEach(() => {
    onSuccess = jest.fn(); // jest에서 제공하는 mock 함수
    onFail = jest.fn();
  });

  it('should call onSuccess when predicate is true', () => {
    check(() => true, onSuccess, onFail);
    // expect(onSuccess.mock.calls.length).toBe(1);
    expect(onSuccess).toHaveBeenCalledTimes(1);
    // expect(onSuccess.mock.calls[0][0]).toBe('yes');
    expect(onSuccess).toHaveBeenCalledWith('yes');
    // expect(onFail.mock.calls.length).toBe(0);
    expect(onFail).toHaveBeenCalledTimes(0);
  });

  it('should call onSuccess when predicate is false', () => {
    check(() => false, onSuccess, onFail);
    expect(onFail).toHaveBeenCalledTimes(1);
    expect(onFail).toHaveBeenCalledWith('no');
    expect(onSuccess).toHaveBeenCalledTimes(0);
  });
});
