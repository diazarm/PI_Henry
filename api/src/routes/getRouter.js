const {Router} = require('express');
const {getDogHandler, getIdHandler, getNameHandler} = require('../handlers/dogGetHandler');

const getRouter = Router();


getRouter.get("/", getDogHandler);

getRouter.get("/dogs/:idRace", getIdHandler);

getRouter.get("/dogs/name", getNameHandler);

module.exports = getRouter;