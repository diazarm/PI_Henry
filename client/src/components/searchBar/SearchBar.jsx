import React, { useState } from 'react';
import style from "./SearchBar.module.css";
import { useDispatch } from 'react-redux';
import { getNameDogs } from '../../redux/action';


function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState(" ")

function handleInputChange(e){
  e.preventDefault()
  setName(e.target.value)
  console.log(name)
}

function handleSubmit(e){
  e.preventDefault()
  dispatch(getNameDogs(name))
}

  return (
    <div className={`${style.search_box}`}>
        <form>
        <input type = "text" placeholder='Busqueda'
        onChange={(e) => handleInputChange(e)} />
        <button type='submit' onClick = {(e) => handleSubmit(e)}>Buscar</button>
        </form>    
    </div>
  );
};



export default SearchBar;