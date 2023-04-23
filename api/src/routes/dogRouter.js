const {Router} = require('express');
const  {getDogRaceHandler, 
        getIdHandler, 
        getNameHandler, postDogHandler
       } = require('../handlers/dogGetHandler');

const dogRouter = Router();


dogRouter.get("/", getDogRaceHandler);

dogRouter.get("/:idRaza", getIdHandler);

dogRouter.get("/name", getNameHandler);

dogRouter.post("/", postDogHandler);

module.exports = dogRouter;