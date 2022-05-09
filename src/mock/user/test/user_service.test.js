const UserService = require('../user_service');
const UserClient = require('../user_client');
const StubUserClient = require('./stub_user_client');

describe('UserService - Stub', () => {
  let userService;

  beforeEach(() => {
    userService = new UserService(new StubUserClient());
  });

  it('user login', async () => {
    const user = await userService.login();
    expect(user).toEqual(true);
  });
});
