class ProductClient {
  fetchItems() {
    // 서버 백엔드 제품데이터 받아오는 클라이언트
    return fetch('http://example.com/login/id+password').then((response) =>
      response.json()
    );
  }
}

module.exports = ProductClient;
