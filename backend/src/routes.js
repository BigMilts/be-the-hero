const express = require("express");

const OngController = require('./controller/OngController');
const IncidentController = require('./controller/IncidentController');
const ProfileController = require('./controller/ProfileController')
const SessionController = require('./controller/SessionController');
const routes = express.Router();

// login route
routes.post('/sessions', SessionController.create )

// Ongs routes
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

// Profile routes
routes.get('/profile', ProfileController.index);

// Incidents routes
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);
	
module.exports = routes;