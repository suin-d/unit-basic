const UserService = require('../user_service');
const UserClient = require('../user_client');
jest.mock('../user_client');

describe('UserService', () => {
  // login 함수 mocking
  const login = jest.fn(async () => 'success');
  // UserClient 전체 mocking
  UserClient.mockImplementation(() => {
    return {
      login, // login하면 mock 함수와 연결되도록!
    };
  });
  let userService;

  beforeEach(() => {
    userService = new UserService(new UserClient());
  });

  // 1번째 login 시 호출 확인
  it('calls login() on UserClient when tries to login', async () => {
    await userService.login('abc', 'abc');
    expect(login.mock.calls.length).toBe(1);
  });

  // 재로그인 시 X
  it('should not call login() on UserClient again if already logged in', async () => {
    await userService.login('abc', 'abc');
    await userService.login('abc', 'abc');

    expect(login.mock.calls.length).toBe(1);
  });
});
