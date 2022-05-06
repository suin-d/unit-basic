const ProductService = require('../product_service_no_di.js');
const ProductClient = require('../product_client.js');
jest.mock('../product_client'); // 가짜 mockclient 사용 명시

describe('ProductService', () => {
  const fetchItems = jest.fn(async () => [
    // mock 함수가 비동기적으로 배열 리턴
    { item: 'milk', available: true },
    { item: 'banana', available: false },
  ]);
  ProductClient.mockImplementation(() => {
    return {
      // fetchItems: fetchItems;
      fetchItems,
    };
  });

  let productService;

  // 연결

  beforeEach(() => {
    // 네트워크 상태에 의존하는 코드
    productService = new ProductService();
  }); // productclient에서 이 코드 사용, 단위테스트는 모듈 간 상호작용을 테스트하면 안되고 단위 하나만 해야

  it('should filter out only available items', async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: 'milk', available: true }]);
  });
});
