class UserService {
  constructor(userClient) {
    this.userClient = userClient;
    this.isLogedIn = false;
  }

  login(id, password) {
    if (!this.isLogedIn) {
      //return fetch('http://example.com/login/id+password')
      // .then((response) => response.json());
      return this.userClient
        .login(id, password)
        .then((data) => (this.isLogedIn = true));
    }
  }
}
module.exports = UserService;

// 특정한 상황에 호출 하는지 안하는지 테스트할 때는 mock을 이용해야!
