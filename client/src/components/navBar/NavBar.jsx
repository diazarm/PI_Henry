import React from 'react';
import style from "../navBar/NavBar.module.css";
import { Link } from 'react-router-dom';



const NavBar = () => {
  return (
    <div className={style.mainContainer}>
        <Link to="/home">Home</Link>
        <Link to="/detail">Detail</Link>
        <Link to="/form">Create Dog</Link>
    </div>
  )
}

export default NavBar;