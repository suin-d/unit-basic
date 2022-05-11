class StubStackClient {
  // mock X, 실제 구현사항이 있는 클래스, 네트워크 사용하지 않고 데이터 바로 리턴
  async fetchPerson() {
    return [
      { id: 1, name: 'Bob' },
      { id: 2, name: 'Lilly' },
      { id: 3, name: 'Hina' },
    ];
  }
}

module.exports = StubStackClient;
