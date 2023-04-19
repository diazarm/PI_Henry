const axios = require ('axios');
const {Dogs, Temperaments} = require ('../db');



const createDogBd = async () =>{
    return (await axios.get(`https://api.thedogapi.com/v1/breeds/`)).data;
}




module.exports = {createDogBd};