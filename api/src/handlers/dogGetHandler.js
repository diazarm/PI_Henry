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
    const source = isNaN(id) ? 'bdd' : 'api'
    try {
        const response = await getUserById(id, source)
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
    
};

const getNameHandler = async(req, res) =>{
    res.send("get de name")
    
};

const getTemperamentsHandler = async(req, res) =>{
    
}

const postDogHandler = async(req, res) => {

}
module.exports = {getDogRaceHandler, postDogHandler,getIdHandler, getNameHandler,getTemperamentsHandler};