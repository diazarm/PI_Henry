import axios from "axios";


const getDogs = () => {
    return async function (dispatch){
        const json = await axios.get("http://localhost:3001/dogs");
        return dispatch({
            type:'GET_ALL_DOGS',
            payload:json.data
        });
    }
};


export function getNameDogs(name){
    return async function (dispatch){
        try {
          const json = await axios.get(`http://localhost:3001/dogs/name/?name=${name}`);  
          return dispatch({
            type: 'GET_NAME_DOGS',
            payload: json.data
        })
        }catch (error) {
          console.log(error)  
        }
    }
}





export function filterDogByStatus(payload){
    return{
        type: 'FILTER_BY_VALUE',
        payload
    }
}



export default getDogs;