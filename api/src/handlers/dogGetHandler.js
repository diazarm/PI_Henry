const { createDogBd} = require('../controllers/getController');


const getDogHandler = async(req, res) =>{
    const {name} = req.query;
    try {
        const response = await createDogBd()
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


module.exports = {getDogHandler, getIdHandler, getNameHandler};