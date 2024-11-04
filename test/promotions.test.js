const promotionsDAO = require('./mocks/promotionsDAO');
const request = require('supertest');

describe('Tests for promotions', () => {
  beforeAll(() => {
      promotionsDAO.generateMock();
  });

  test('Insert new promotion', () => {
      //arrange
      const id = 1;
      const name = "test";
      const promotion_date = "2024-10-12";

      //act
      return request(app)
        .post('/promotion')
        .send({name, promotion_date})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200);
        /*.then(response => {
          expect(response.body.email).toEqual('foo@bar.com');
        });*/

  });
  test('is delicious', () => {
    expect(myBeverage.delicious).toBeFalsy();
  });

  test('is not sour', () => {
    expect(myBeverage.sour).toBeFalsy();
  });
});

