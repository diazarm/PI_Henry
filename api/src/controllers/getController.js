const axios = require ('axios');
const {Dogs, Temperaments} = require ('../db');
const {API_KEY} = process.env;

const LinkApi = `https://api.thedogapi.com/v1/breeds/?api_key=${API_KEY}`;

const raceDogApi = async () =>{
    const raceDog =  (await axios.get(LinkApi)).data;
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
  const urlData = (await axios.get(LinkApi)).data;
  if (source === "api") {
    const apiFiltrada = urlData.filter(ele => ele.id === Number(id));
    const nuevo = {
          id: apiFiltrada[0].id,
          name: apiFiltrada[0].name,
          height: apiFiltrada[0].height.metric,
          weight: apiFiltrada[0].weight.metric,
          life_span: apiFiltrada[0].life_span,
          image: apiFiltrada[0].image.url,
          created: false,
        };
        return nuevo;
  } else {
    return await Dogs.findByPk(id);
  }
};












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