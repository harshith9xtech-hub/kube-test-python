const request = require('supertest');
const app = require('../app');

test('GET /api returns message', async () => {
  const res = await request(app).get('/api');
  expect(res.statusCode).toBe(200);
  expect(res.body.message).toBe('Hello from Backend 🚀');
});
