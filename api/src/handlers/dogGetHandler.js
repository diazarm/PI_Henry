const { raceDogApi, getUserById} = require('../controllers/getController');


const getDogRaceHandler = async(req, res) =>{
    const {name} = req.query;
    try {
        const response = await raceDogApi()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const getIdHandler = async(req, res) =>{
    const  {id} = req.params;
    isNaN(id) ? res.send("muestra el perro por NOMBRE desde la BDD") : res.send("muestra el perro por id");

};

 const getNameHandler = async(req, res) =>{
       res.send("muestra el perro porname por query")
    
 };

const postDogHandler = async(req, res) => {
    res.send("aqui va el post para crear un perro")
}


module.exports = {getDogRaceHandler, postDogHandler,getIdHandler, getNameHandler};