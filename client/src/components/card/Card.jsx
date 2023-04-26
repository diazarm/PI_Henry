import style from "../card/Card.module.css";
import React from "react";

export default function Card ({id, name, image, height, weight, life_span}) {
    return (
        <div className={style.card_container}>
            <h3>Tarjeta # {id}</h3>
            <h2>{name}</h2>
            <img src={image} alt="random" width="270px" height="250px"/>
            <h3>Altura: {height}</h3>
            <h3>Peso: {weight}</h3>
            <h3>Prom de vida: {life_span}</h3>
        </div>
    )
}



