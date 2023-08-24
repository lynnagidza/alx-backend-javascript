const { expect } = require('chai');
const request = require('request');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api');

chai.use(chaiHttp);

describe('Index page', () => {
  it('Correct status code?', (done) => {
    request.get('http://localhost:7865', (error, response) => {
      if (error) done(error);

      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      if (error) done(error);

      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart Page', () => {
  it('should return a 200 status code when :id is a number', (done) => {
    chai.request(app)
      .get('/cart/123')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Payment methods for cart 123');
        done();
      });
  });

  it('should return a 404 status code when :id is not a number', (done) => {
    chai.request(app)
      .get('/cart/hello')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});

describe('Payment methods', () => {
  it('should return the available payment methods', (done) => {
    chai.request(app)
      .get('/available_payments')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.eql({ payment_methods: { credit_cards: true, paypal: false } });
        done();
      });
  });
});

describe('Login attempts', () => {
  it('should return a welcome message with the provided username', (done) => {
    chai.request(app)
      .post('/login')
      .set('Content-Type', 'application/json')
      .send({ userName: 'Betty' })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Welcome Betty');
        done();
      });
  });
});
