const promotionsDAO = require('./mocks/promotionsDAO');

const request = require('supertest');

promotionsDAO.generateMock();

const { app } = require('../app');

describe('Tests for promotions', () => {
  test('Insert new promotion', () => {
      //arrange
      const name = "test";
      const promotion_date = "2024-10-12";

      //act
      return request(app)
        .post('/promotion')
        .send({name, promotion_date})
        .set('Accept', 'application/json')
        .expect(201);
  });
});
