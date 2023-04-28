//import React from 'react'
import { NavLink } from "react-router-dom";
import style from "../landing/LandingPage.module.css";


const LandingPage = ()=> {
    return (
      <div className={style.main_container}>
        <div className={style.main_left_container}>
          <h1 className={style.titleApp} >Cuatro Patas! </h1>
          <h3>"Una fuente inagotable de amor, lealtad y compañía incondicional."</h3>
          <div className={style.left_paragraph}>
            <p>Con esta aplicación puedes obtener información sobre los nombres y detalles de las razas de perros, como su tamaño, esperanza de vida y temperamento, ¡y también puedes agregar nuevas razas a la lista!</p>
          </div>
          
          <NavLink to="/home">
              <button className={style.button_home}>Bienvenid@s</button>
          </NavLink>
        </div>
      </div>
    );
  }
  
  export default LandingPage;
  
