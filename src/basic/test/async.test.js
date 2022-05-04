const fetchProduct = require('../async.js');

describe('Async', () => {
  // done 방식, 테스트 수행 늦어짐
  it('async - done', (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: 'Milk', price: 200 });
      done();
    });
  });

  // ✨ return 방식 : 프로미스 자체를 리턴, 간편, 즉각적으로 확인
  it('async - return', () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: 'Milk', price: 200 });
    });
  });

  // async 명시
  it('async - await', async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: 'Milk', price: 200 });
  });

  // 성공하는 케이스 확인, 프로미스 호출, resolves 되면 -
  it('async - resolves', () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: 'Milk',
      price: 200,
    });
  });

  it('async - rejects', () => {
    return expect(fetchProduct('error')).rejects.toBe('network error');
  });
  // it('throw an error', () => {
  //   expect(fetchProduct('error').toThrow('network error'));
  // });
});
