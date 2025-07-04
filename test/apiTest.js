const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);
const API_URL = 'https://reqres.in';

describe('API Automation Test', () => {
    it('GET /users should return a list of users', (done) => {
        chai.request(API_URL)
            .get('/api/users?page=2')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                done();
            });
    });

    it('POST /users should create a new user with API key', (done) => {
        chai.request(API_URL)
            .post('/api/users')
            .set('x-api-key', 'reqres-free-v1')
            .send({ name: 'Handra', job: 'QA Engineer' })
            .end((err, res) => {
                expect(res).to.have.status(201);
                expect(res.body).to.be.an('object');
                done();
            });
    });

    it('PATCH /users/:id should update user data with API key', (done) => {
        chai.request(API_URL)
            .patch('/api/users/2')
            .set('x-api-key', 'reqres-free-v1')
            .send({ job: 'Senior QA Engineer' })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                done();
            });
    });

    it('DELETE /users/:id should delete user with API key', (done) => {
        chai.request(API_URL)
            .delete('/api/users/2')
            .set('x-api-key', 'reqres-free-v1')
            .end((err, res) => {
                expect(res).to.have.status(204);
                done();
            });
    });
})