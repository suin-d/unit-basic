const ProductService = require('../product_service.js');
const StubProductClient = require('../test/stub_product_client.js');

describe('ProductService - Stub', () => {
  let productService;

  beforeEach(() => {
    // 초기화
    productService = new ProductService(new StubProductClient());
    // p.s에 Stub 데이터 전달
  });

  it('should filter out only available items', async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: 'milk', available: true }]);
  });
});
