import React from 'react'
import { Link } from "react-router-dom";
import style from "../landing/LandingPage.module.css";
import "../landing/buttonHome.css"

const LandingPage = ()=> {
    return (
      <div className={`${style.main_container}`}>
        <div className={`${style.main_left_container}`}>
          <h1 className={`${style.titleApp}`} >Cuatro Patas! </h1>
          <h3>"Una fuente inagotable de amor, lealtad y compañía incondicional."</h3>
          <div className={`${style.left_paragraph}`}>
            <p>Con esta aplicación puedes obtener información sobre los nombres y detalles de las razas de perros, como su tamaño, esperanza de vida y temperamento, ¡y también puedes agregar nuevas razas a la lista!</p>
          </div>
          
          <Link to="/home">
              <button className="button_home">Bienvenido</button>
          </Link>
        </div>
      </div>
    );
  }
  
  export default LandingPage;
  
