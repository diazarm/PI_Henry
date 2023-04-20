const {Router} = require('express');
const  {getDogRaceHandler, 
        getIdHandler, 
        getNameHandler, 
       } = require('../handlers/dogGetHandler');

const getRouter = Router();


getRouter.get("/dogs", getDogRaceHandler);

getRouter.get("/dogs/name", getNameHandler);

getRouter.get("/dogs/:id", getIdHandler);


module.exports = getRouter;