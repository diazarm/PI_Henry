const axios = require ('axios');
const {Dogs, Temperaments} = require ('../db');



const raceDogApi = async () =>{
    const raceDog =  (await axios.get(`https://api.thedogapi.com/v1/breeds/`)).data;
    return raceDog.map(race => ({id:race.id,  breed_group: race.breed_group}))
    
}




module.exports = {raceDogApi};