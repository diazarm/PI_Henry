const { raceDogApi, getUserById, createNewDog, searchDogByName, getAllDogs} = require('../controllers/getController');








// este es /dogs/name?= 

 const getNameHandler = async(req, res) =>{
     const {name} = req.query;
     const results = name ? searchDogByName(name) : await getAllDogs() 
     
     res.status(200).json(results)
     
     
     
     
      
    };

 
    
    
    
    
    
    
// post/dogs crea un perro    
    
const postDogHandler = async(req, res) => {
        try {
            const {name, height,weight,life_span, image, created} = req.body;
            const newDog = await createNewDog(name, height,weight,life_span, image,created);
            res.status(201).json({message:newDog}); //201 exito creado
        } catch (error) {
        res.status(400).json({error:error.message});
    }
};
//  este es el handler de /dogs (muestra perro)
const getDogRaceHandler = async(req, res) =>{
    const {name} = req.query;
    try {
        const response = await raceDogApi()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

//  este es /dogs/:id 
const getIdHandler = async(req, res) =>{
    const  {idRaza} = req.params;
    
    const source = isNaN(idRaza) ? 'bdd' : 'api';
    try {
        const dogId = await getUserById(idRaza, source);
        console.log(source)
        res.status(200).json(dogId)
        } catch (error) {
        res.status(400).json({error:error.message});
    }

};

module.exports = {getDogRaceHandler, postDogHandler,getIdHandler, getNameHandler};