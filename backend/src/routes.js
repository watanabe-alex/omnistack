const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/**
 * Rota / Recurso 
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar uma informação no back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação, ...).
 * Ex.: '/users?name=Alex'
 * Para acessar: const params = request.query;
 * 
 * Route Params: Parâmetros utilizado para identificar recursos.
 * Ex.: '/user/:id'
 * Para acessar: const params = request.params;
 * 
 * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
 * Para acessar: const params = request.body;
 */

 /**
  * request: guarda dos os dados que vem da requisição do usuário
  * response: responsável por retornar uma resposta pro usuário
  */
 

  /**
   * npm install celebrate
   * para validação dos dados
   * celebrate faz a integração do joi (biblioteca de validação) com o express
   */

routes.post('/sessions', SessionController.create)

//lista todas as ongs
routes.get('/ongs', OngController.index);

// cadastra uma ong
routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.number().required().min(10).max(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2),
  })
}), OngController.create);  //roda da ordem dos parâmetros (conceito de middlewares)

//o celebrate muda um pouco o formato, pois eu não vou validar todas as informações do header (são várias informações automáticas)
routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
}), ProfileController.index);

routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  })
}), IncidentController.index);

routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  })
}), IncidentController.delete);

module.exports = routes;