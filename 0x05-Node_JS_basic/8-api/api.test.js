const request = require('request');
const { expect } = require('chai');
describe('Integration test', () => {
  const API_URL = 'http://127.0.0.1:7865';
  it('GET / return', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome');
      done();
    });
  });
});
