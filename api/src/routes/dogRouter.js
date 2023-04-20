const {Router} = require('express');
const  {getDogRaceHandler, 
        getIdHandler, 
        getNameHandler, 
       } = require('../handlers/dogGetHandler');

const dogRouter = Router();


dogRouter.get("/dogs", getDogRaceHandler);

dogRouter.get("/dogs/:id", getIdHandler);
// dogRouter.get("/dogs/:id",(req, res) =>{
//         res.send("ruta de la info por id")
// });


//dogRouter.get("/dogs/name", getNameHandler);
dogRouter.get("/dogs/name", (req, res)=>{
        res.send("ruta que trae los nombres")
});

dogRouter.post("/dogs", (req, res) =>{
        res.send("aqui va el post para crear un perro")
})
module.exports = dogRouter;