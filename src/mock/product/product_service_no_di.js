const ProductClient = require('./product_client');
class ProductService {
  constructor() {
    this.productClient = new ProductClient();
  }

  fetchAvailableItems() {
    // 아이템 안에서 구매 가능한 제품만 필터링해서 보여줌
    // 사용자가 볼 수 있는 비즈니스 로직
    return this.productClient
      .fetchItems()
      .then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductService;
