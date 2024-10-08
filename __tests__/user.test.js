const request = require('supertest');
const app = require('../src/app');

describe('GET /api/users', () => {
  it('should return all users', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(10);
  });
});

describe('GET /api/users/:id', () => {
  it('should return a single user', async () => {
    const res = await request(app).get('/api/users/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', 1);
  });
});
