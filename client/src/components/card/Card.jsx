import style from "../card/Card.module.css";
import React from "react";

export default function Card ({name, image, height, weight, life_span}) {
    return (
        <div className={`${style.card_container}`}>
            <h2>{name}</h2>
            <img src={image} alt="random" width="250px" height="250px" />
            <p>Altura: {height}</p>
            <p>Peso: {weight}</p>
            <p>Prom de vida: {life_span}</p>
        </div>
    )
}


// function Card () {
//     return (
//               
//             <h2>Nombre: </h2>
//             <img src="{image}" alt="not found" width={"200px"} height={"250px"} />
//             <p>Altura:</p>
//             <p>Peso:</p>
//             <p>Promedio de vida:</p>
//         </div>
//     );
// };

// export default Card;


/*
id:race.id, 
        image:race.image.url, 
        name:race.name, 
        height:race.height.metric, 
        weight: race.weight.metric, 
        life_span: race.life_span,
*/