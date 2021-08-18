const entity = require('../../entities');

describe('Post entity', () => {
  let body = {};
  beforeEach(() => {
    body.title = 'first title';
    body.body = 'hell world';
    body.author = '5c0a7922c9d89830f4911426';
  });
  it('should validate title to be string', () => {
    body.title = 3;
    expect(() => entity.post(body)).toThrow('"title" must be a string');
  });
  it('should validate title to be not null', () => {
    body.title = null;
    expect(() => entity.post(body)).toThrow('"title" must be a string');
  });
  it('should validate body to be string', () => {
    body.body = 3;
    expect(() => entity.post(body)).toThrow('"body" must be a string');
  });
  it('should validate author to be valid mongoose id', () => {
    body.author = '5c0a7922c9d89830f4911426-rhfdfdg';
    expect(() => entity.post(body)).toThrow('Invalid author id');
  });
});

describe('User entity', () => {
  let body = {};
  beforeEach(() => {
    body.email = 'john@gmail.com';
    body.firstname = 'john';
    body.lastname = 'doe';
    body.role = 'user';
  });

  it('should validate user entity to be a function', () => {
    expect(entity.user).toBeDefined();
  });
  it('should be a valid email', () => {
    body.email = 'dsldks.com';
    expect(() => entity.user(body)).toThrow('"email" must be a valid email');
  });
  it('should be a string email', () => {
    body.email = null;
    expect(() => entity.user(body)).toThrow('"email" must be a string');
  });
  it('should allow firstname to be null', () => {
    body.firstname = null;
    expect(() => entity.user(body)).not.toThrowError();
  });
  it('should allow firstname to be empty', () => {
    body.firstname = '';
    expect(() => entity.user(body)).not.toThrowError();
  });
  it('should validate firstname to be string', () => {
    body.firstname = 4;
    expect(() => entity.user(body)).toThrow('"firstname" must be a string');
  });
  it('should allow lastname to be null', () => {
    body.lastname = null;
    expect(() => entity.user(body)).not.toThrowError();
  });
  it('should allow lastname to be empty', () => {
    body.lastname = '';
    expect(() => entity.user(body)).not.toThrowError();
  });
  it('should validate lastname to be string', () => {
    body.lastname = 4;
    expect(() => entity.user(body)).toThrow('"lastname" must be a string');
  });
  it('should validate role to be either user or admin', () => {
    body.role = 'me';
    expect(() => entity.user(body)).toThrow(
      '"role" must be one of [user, admin]'
    );
  });
});

describe('Comment entity', () => {
  let comment = {};
  beforeEach(() => {
    comment.text = 'hello nice post';
    comment.post = '5c0a7922c9d89830f4911426';
    comment.author = '5c0a7922c9d89830f4911347';
  });
  it('should have comment entity function', () => {
    expect(entity.comment).toBeDefined();
  });
  it('should validate text to be string', () => {
    comment.text = null;
    expect(() => entity.comment(comment)).toThrow('"text" must be a string');
  });
  it('should allow empty text', () => {
    comment.text = '';
    expect(() => entity.comment(comment)).toThrow(
      '"text" is not allowed to be empty'
    );
  });
  it('should validate post to be string', () => {
    comment.post = null;
    expect(() => entity.comment(comment)).toThrow('Invalid post id');
  });
  it('should allow empty post', () => {
    comment.post = '';
    expect(() => entity.comment(comment)).toThrow('Invalid post id');
  });
  it('should validate post to be valid mongoose id', () => {
    comment.post = '5c0a7922c9d89830f4911426-rhfdfdg';
    expect(() => entity.comment(comment)).toThrow('Invalid post id');
  });
  it('should validate author to be valid mongoose id', () => {
    comment.author = '5c0a7922c9d89830f4911426-rhfdfdg';
    expect(() => entity.comment(comment)).toThrow('Invalid author id');
  });
});
