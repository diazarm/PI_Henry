import React from 'react';
import style from "../navbar/NavBar.module.css";


function NavBar() {
  return (
    <div className={`${style.search_box}`}>
        <form>
        <input placeholder='Busqueda'/>
        <button>Buscar</button>
        </form>    
    </div>
  );
};

export default NavBar;