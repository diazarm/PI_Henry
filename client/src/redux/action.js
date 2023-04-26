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


export default getDogs;
//27:33 video