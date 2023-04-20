const {Router} = require('express');
const  {getDogRaceHandler, 
        getIdHandler, 
        getNameHandler, postDogHandler
       } = require('../handlers/dogGetHandler');

const dogRouter = Router();


dogRouter.get("/dogs", getDogRaceHandler);

dogRouter.get("/dogs/name", getNameHandler);

dogRouter.get("/dogs/:id", getIdHandler);

dogRouter.post("/dogs", postDogHandler);

module.exports = dogRouter;