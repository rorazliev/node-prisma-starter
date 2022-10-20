import supertest from 'supertest';
import app from '../src/app';

describe('GET /', () => {
  it('should ', done => {
    supertest(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, { message: 'Hello World!' }, done);
  });
});

describe('GET /api/v1/example', () => {
  it('should ', done => {
    supertest(app)
      .get('/api/v1/example')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, { records: [] }, done);
  });
});

describe('404', () => {
  it('should', done => {
    supertest(app)
      .get('/some-random-path')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404, { message: 'Not Found' }, done);
  });
});
