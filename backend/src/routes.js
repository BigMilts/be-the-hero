const express = require("express");

const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controller/OngController');
const IncidentController = require('./controller/IncidentController');
const ProfileController = require('./controller/ProfileController')
const SessionController = require('./controller/SessionController');
const routes = express.Router();

// login route
routes.post('/sessions', SessionController.create )

// Ongs routes
routes.get('/ongs', OngController.index);

routes.post('/ongs', celebrate({
  [Segments.BODY]:Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp:Joi.string().required().min(10).max(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2),
  })
}) ,OngController.create);

// Profile routes
routes.get('/profile', celebrate({

  [Segments.HEADERS]:Joi.object({
     authorization: Joi.string().required()
    }).unknown(),
}), ProfileController.index);

// Incidents routes
routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  })
}), IncidentController.index);

routes.post('/incidents', celebrate({
  [Segments.BODY]:Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    value :Joi.number().required(),
  }),
  [Segments.HEADERS]:Joi.object({
    authorization: Joi.string().required()
   }).unknown(),
}),IncidentController.create);

routes.delete('/incidents/:id',celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  }) 
}),IncidentController.delete);
	
module.exports = routes;