const express = require('express');
/**
 * npm install cors
 */
const cors = require('cors');
const routes = require('./routes');

const app = express();

//quando estiver em produção, tem que configurar o 'origin' (quem está habilitado)
app.use(cors());

//eu aviso o express que o corpo da minha requisição será em json (antes das rotas)
app.use(express.json());

//carrega as rotas
app.use(routes);




app.listen(3333);