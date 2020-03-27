const knex = require('knex');
const configuration = require('../../knexfile');

/**
 * npm install cross-env
 * no package.json rodar o comando com uma variável ambiente
 * "scripts": {
 *  "start": "nodemon src/index.js",
 *  "test": "cross-env NODE_ENV=test jest"
 * },
 */
const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;

const connection = knex(config);

module.exports = connection;