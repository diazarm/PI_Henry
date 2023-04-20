const {Router} = require('express');
const  {getDogRaceHandler, 
        getIdHandler, 
        getNameHandler, 
       } = require('../handlers/dogGetHandler');

const getRouter = Router();


getRouter.get("/dogs", getDogRaceHandler);

getRouter.get("/dogs/:id", getIdHandler);
// getRouter.get("/dogs/:id",(req, res) =>{
//         res.send("ruta de la info por id")
// });


//getRouter.get("/dogs/name", getNameHandler);
getRouter.get("/dogs/name", (req, res)=>{
        res.send("ruta que trae los nombres")
});

getRouter.post("/dogs", (req, res) =>{
        res.send("aqui va el post para crear un perro")
})
module.exports = getRouter;