const userServices = require('../../services/user');
const postServices = require('../../services/post');
const commentServices = require('../../services/comment');
const entity = require('../../entities');
const models = require('../../models');
const conn = require('../../db/db');

const url = 'mongodb://localhost:27017/simple-blog-test';
conn.connect(url);

describe('Serrvices', () => {
  let createdUser = null;
  let createdPost = null;
  let createdComment = null;
  beforeAll(async () => {
    await models.User.deleteMany({});
  });
  afterAll(() => {
    conn.disconnect();
  });
  describe('User service', () => {
    let userData = {};
    beforeEach(() => {
      userData.email = 'johndoe@ab.com';
      userData.firstname = 'john';
      userData.lastname = 'doe';
      userData.role = 'user';
    });
    it('should find user service module', () => {
      expect(userServices).toBeDefined();
    });
    it('should create a new user', async () => {
      expect(userServices.register).toBeDefined();
      const makeuser = entity.user(userData);
      createdUser = await userServices.register(makeuser);
      expect(createdUser).toMatchObject(makeuser);
    });
    it('should update a user', async () => {
      expect(userServices.updateUser).toBeDefined();
      createdUser.role = 'admin';
      createdUser.firstname = 'peter';
      createdUser.userId = createdUser._id;
      const user = await userServices.updateUser(createdUser);
      expect(user).toMatchObject(expect.any(Object));
    });
    it('should get all users', async () => {
      expect(userServices.getAllUsers).toBeDefined();
      const users = await userServices.getAllUsers();
      expect(users).toContainEqual(
        expect.objectContaining({
          email: expect.any(String),
        })
      );
    });
    it('should get a user', async () => {
      expect(userServices.getAUser).toBeDefined();
      const user = await userServices.getAUser({ userId: createdUser._id });
      expect(user).toMatchObject(expect.any(Object));
    });
  });
  describe('Post service', () => {
    let postData = {};
    beforeEach(() => {
      postData.title = 'This is a post';
      postData.body =
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, animi!';
      postData.author = createdUser._id;
    });

    it('should find post service module', () => {
      expect(postServices).toBeDefined();
    });
    it('should create a new post', async () => {
      expect(postServices.createPost).toBeDefined();
      const makePost = entity.post(postData);
      createdPost = await postServices.createPost(makePost);
      expect(createdPost).toMatchObject(expect.any(Object));
    });
    it('should update a post', async () => {
      expect(postServices.updatePost).toBeDefined();
      createdPost.title = 'This is updated post';
      const post = await postServices.updatePost(createdPost);
      expect(post).toMatchObject(expect.any(Object));
    });
    it('should get all posts', async () => {
      expect(postServices.getAllPosts).toBeDefined();
      const posts = await postServices.getAllPosts();
      expect(posts).toContainEqual(
        expect.objectContaining({
          title: expect.any(String),
          body: expect.any(String),
        })
      );
    });
    it('should get a post', async () => {
      expect(postServices.getAPost).toBeDefined();
      const post = await postServices.getAPost({ postId: createdPost._id });
      expect(post).toMatchObject(expect.any(Object));
    });
  });
  describe('Comment services', () => {
    let commentData = {};
    beforeEach(() => {
      commentData.text =
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, animi!';
      commentData.author = createdUser._id;
      commentData.post = createdPost._id;
    });

    it('should find comment service module', () => {
      expect(commentServices).toBeDefined();
    });
    it('should add comment', async () => {
      expect(commentServices.addComment).toBeDefined();
      const makeComment = entity.comment(commentData);
      createdComment = await commentServices.addComment(makeComment);
      expect(createdComment).toMatchObject(commentData);
    });
    it('should update a comment', async () => {
      expect(commentServices.updateComment).toBeDefined();
      createdComment.text = 'This is updated text';
      const comment = await commentServices.updateComment(createdComment);
      expect(comment).toMatchObject(expect.any(Object));
    });
    it('should get all post comments', async () => {
      expect(commentServices.postComments).toBeDefined();
      const comments = await commentServices.postComments({
        postId: createdPost._id,
      });
      expect(comments).toContainEqual(
        expect.objectContaining({
          text: expect.any(String),
        })
      );
    });
    it('should get a comment', async () => {
      expect(commentServices.getAComment).toBeDefined();
      const comment = await commentServices.getAComment({
        commentId: createdComment._id,
      });
      expect(comment).toMatchObject(expect.any(Object));
    });
    it('should delete a comment', async () => {
      expect(commentServices.deleteComment).toBeDefined();
      const comment = await commentServices.deleteComment({
        commentId: createdComment._id,
      });
      expect(comment).toBe('comment deleted');
    });
  });
  it('should delete a post', async () => {
    expect(postServices.deletePost).toBeDefined();
    const post = await postServices.deletePost({ postId: createdPost._id });
    expect(post).toBe('post deleted');
  });
  it('should delete a user', async () => {
    expect(userServices.deleteUser).toBeDefined();
    const user = await userServices.deleteUser({ userId: createdUser._id });
    expect(user).toBe('user deleted');
  });
});
