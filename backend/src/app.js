const express = require('express');
/**
 * npm install cors
 */
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

//quando estiver em produção, tem que configurar o 'origin' (quem está habilitado)
app.use(cors());

//eu aviso o express que o corpo da minha requisição será em json (antes das rotas)
app.use(express.json());

//carrega as rotas
app.use(routes);

//para ajustar os erros da validação de dados de 500 (erro do servidor) para 400 (requisição ruim)
//e deixa em um formato bonito
app.use(errors());

module.exports = app;