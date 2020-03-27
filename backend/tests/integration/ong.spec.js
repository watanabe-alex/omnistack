/**
 * npm install supertest -D
 */
const request = require('supertest');
const app = require('../../src/app');
const connection= require('../../src/database/connection');

describe('ONG', () => {
    //executa antes de cada teste
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    //executa depois de todos os testes
    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            //.set('Authorization','dfa31lkj') //quando precisar passar um header
            .send({
                name: "minha ong",
                email: "contato@gmail.com",
                whatsapp: "4700000000",
                city: "Rio do Sul",
                uf: "SC"
            });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});

