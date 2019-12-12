const app = require('../../app');
const request = require('supertest');

describe('Get Endpoints', () => {
    it('should get HelloWorld!', async () => {
         await request(app)
            .get('/api/helloworld')
            .expect(200)
    });
});