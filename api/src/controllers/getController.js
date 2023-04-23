const axios = require ('axios');
const {Dogs, Temperaments} = require ('../db');
const {API_KEY} = process.env;

//const LinkApi = 

const raceDogApi = async () =>{
    const raceDog =  (await axios.get(`https://api.thedogapi.com/v1/breeds/?api_key=${API_KEY}`)).data;
    return raceDog.map(race => ({id:race.id, image:race.image, name:race.name, height:race.height, weight: race.weight, life_span: race.life_span  }))
    
}
//este funciona pero devuelve todo
// const getUserById = async(id, source) => {
//    const dogId = source === "api"
//     ?(await axios.get(`https://api.thedogapi.com/v1/breeds/${id}/?api_key=${API_KEY}`)).data
//     : await Dogs.findByPk(id);
//     return dogId; 
// }

const getUserById = async (id, source) => {
    const urlData = (await axios.get(`https://api.thedogapi.com/v1/breeds/${id}/?api_key=${API_KEY}`)).data;
    const dogId = source === "api"
      ? {
          id: urlData.id,
          name: urlData.name,
          height: urlData.height.metric,
          weight: urlData.weight.metric,
          life_span: urlData.life_span,
          image: urlData.image,
          created:false, 
        }
      : await Dogs.findByPk(id);
    return dogId;
  }











const createNewDog = async(name, height, weight, life_span,image, created) =>{
    if (name && height && weight && life_span &&image) {
        return await Dogs.create({name, height, weight, life_span,image,created}) //el await es pq devuelve la promesa.
    }else{ throw new Error('Faltan datos')}
   
}
const searchDogByName = ()=>{

}




const getAllDogs =async() => {

    const dataBaseDogs = await Dogs.findAll();

    const apiDogsRaw = await (axios.get(`https://api.thedogapi.com/v1/breeds/?api_key=${API_KEY}`)).data 

    const apiDogs = cleanArray(apiDogsRaw)   
    
    const cleanArray = (arr)=>arr.map((elem)=>{
            return {
                id:elem.id,
                name:elem.name,
                height:elem.heigt,
                weight:elem.weight,
                life_span:elem.life_span,
                image:elem.image
            }
        })
    return [...dataBaseDogs, ...apiDogs];
}

const cleanArray = (arr)=>arr.map((elem)=>{
    return {
        id:elem.id,
        name:elem.name,
        height:elem.heigt,
        weight:elem.weight,
        life_span:elem.life_span,
        image:elem.image
    }
})

module.exports = {raceDogApi, getUserById, createNewDog, searchDogByName, getAllDogs};