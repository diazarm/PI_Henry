import style from "../card/Card.module.css";
import React from "react";

export default function Card ({id, name, image, temperament,weight }) {
        return (
        <div className={style.card_container}>
            <h3>Tarjeta # {id}</h3>
            <h2>{name}</h2>
            <img src={image} alt=" dog random" width="270px" height="250px"/>
            <h3>Peso: {weight} kg.</h3>
            <h3>Temperamento: {temperament}</h3>
        </div>
    )
}



