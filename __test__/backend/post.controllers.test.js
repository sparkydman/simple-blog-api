jest.mock('../../controllers/post', () => {
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
  const createPost = jest.fn(async (httpReq) => {
    const create = jest.fn((body) => Promise.resolve(body));
    const result = await create(httpReq?.body);
    return response(result, 201, 'success');
  });

  return {
    createPost,
  };
});

const postController = require('../../controllers/post');

describe('Post controller testing', () => {
  let httpReq = {};
  let body = {};
  let result = {};
  beforeAll(() => {
    body.title = 'Title one';
    body.body = 'This is the blog body';
    body.author = '343403j90rfd094';
  });
  beforeEach(() => {
    httpReq.body = body;
    result.body = httpReq.body;
    result.statusCode = 200;
  });
  it('should have postController', () => {
    expect(postController).toBeDefined();
  });
  it('should have createPost function in postController', () => {
    expect(postController.createPost()).toBeDefined();
  });
  it('should create post', async () => {
    result.statusCode = 201;
    const response = await postController.createPost(httpReq);
    expect(response).toMatchObject(result);
  });
});
