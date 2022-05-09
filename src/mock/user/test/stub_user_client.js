class StubUserClient {
  // mock X, 실제 구현사항이 있는 클래스, 네트워크 사용하지 않고 데이터 바로 리턴
  async login() {
    return [{ id: 'hana', password: '12345a' }];
  }
}

module.exports = StubUserClient;
