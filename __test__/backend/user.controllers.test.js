jest.mock('../../controllers/user', () => {
  const registeredUsersID = ['1234567890', '0987654321'];
  const checkUser = jest.fn((userId) => {
    if (!registeredUsersID.includes(userId)) {
      throw new Error('User not found');
    }
  });
  const response = jest.fn((res, status, type) => {
    if (type === 'error')
      return {
        body: { error: res },
        statusCode: status,
      };
    return {
      body: res,
      statusCode: status,
    };
  });
  const createUser = jest.fn(async (httpReq) => {
    const createUser = jest.fn((body) => {
      return Promise.resolve(body);
    });
    const result = await createUser(httpReq?.body);
    return response(result, 201, 'success');
  });
  const updateUser = jest.fn(async (httpReq) => {
    if (httpReq.body.email) {
      return response('Email cannot be update', 400, 'error');
    }
    const updateUser = jest.fn((body) => {
      checkUser(body.userId);
      return Promise.resolve(body);
    });
    try {
      const result = await updateUser(httpReq?.payload);
      return response(result, 200, 'success');
    } catch (err) {
      return response(err.message, 400, 'error');
    }
  });
  const deleteUser = jest.fn(async (httpReq) => {
    const userId = httpReq?.params?.userId;
    const deleteUser = jest.fn(({ userId }) => {
      checkUser(userId);
      return Promise.resolve('user deleted');
    });
    try {
      const result = await deleteUser({ userId });
      return response(result, 200, 'success');
    } catch (err) {
      return response(err.message, 400, 'error');
    }
  });
  return {
    createUser,
    updateUser,
    deleteUser,
  };
});

const userController = require('../../controllers/user');

describe('Controllers testing', () => {
  let httpReq = {};
  let body = {};
  let expectedResult = {};
  beforeAll(() => {
    body.email = 'abc@abc.com';
    body.firstname = 'Williams';
    body.lastname = 'Sarah';
    body.role = 'user';
  });
  beforeEach(() => {
    httpReq.body = body;
    expectedResult.body = httpReq.body;
    expectedResult.statusCode = 200;
  });
  describe('user controllers', () => {
    it('Should have user controller', () => {
      expect(userController).toBeDefined();
    });
    it('Should return created user and statuscode', async () => {
      expect(userController.createUser).toBeDefined();
      expectedResult.statusCode = 201;
      const response = await userController.createUser(httpReq);
      expect(response).toMatchObject(expectedResult);
    });
    it('Should return error email cannot be update', async () => {
      expect(userController.updateUser).toBeDefined();
      const response = await userController.updateUser(httpReq);
      expectedResult.body = {
        error: 'Email cannot be update',
      };
      expectedResult.statusCode = 400;
      expect(response).toMatchObject(expectedResult);
    });
    it('Should return error user not found', async () => {
      expect(userController.updateUser).toBeDefined();
      httpReq.body.email = undefined;
      httpReq.payload = {
        firstname: 'Kelly',
        userId: '3435554',
      };
      const response = await userController.updateUser(httpReq);
      expectedResult.body = {
        error: 'User not found',
      };
      expectedResult.statusCode = 400;
      expect(response).toMatchObject(expectedResult);
    });
    it('Should update user', async () => {
      expect(userController.updateUser).toBeDefined();
      httpReq.body.email = undefined;
      httpReq.payload = {
        firstname: 'Kelly',
        userId: '1234567890',
      };
      const response = await userController.updateUser(httpReq);
      expectedResult.body = httpReq.payload;
      expectedResult.statusCode = 200;
      expect(response).toMatchObject(expectedResult);
    });
    it('Should return error user not found', async () => {
      expect(userController.deleteUser).toBeDefined();
      httpReq.params = {
        userId: '3435546757',
      };

      const response = await userController.deleteUser(httpReq);
      expectedResult.body = {
        error: 'User not found',
      };
      expectedResult.statusCode = 400;
      expect(response).toMatchObject(expectedResult);
    });
    it('Should delete', async () => {
      expect(userController.deleteUser).toBeDefined();
      httpReq.params = {
        userId: '1234567890',
      };

      const response = await userController.deleteUser(httpReq);
      expectedResult.body = 'user deleted';
      expectedResult.statusCode = 200;
      expect(response).toMatchObject(expectedResult);
    });
  });
});
