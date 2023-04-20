const {Router} = require('express');
const {getDogRaceHandler, getIdHandler, getNameHandler} = require('../handlers/dogGetHandler');

const getRouter = Router();


getRouter.get("/", getDogRaceHandler);

getRouter.get("/:id", getIdHandler);

getRouter.get("/dogs/name", getNameHandler);

module.exports = getRouter;