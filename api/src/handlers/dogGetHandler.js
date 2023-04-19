const { raceDogApi} = require('../controllers/getController');


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

    try {
        
    } catch (error) {
        
    }
}

const getNameHandler = async(req, res) =>{

    try {
        
    } catch (error) {
        
    }
}


module.exports = {getDogRaceHandler, getIdHandler, getNameHandler};