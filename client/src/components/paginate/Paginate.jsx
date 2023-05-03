import React from "react";
import style from "../paginate/Paginate.module.css";

export default function Paginado({cardPerPage, allDogs, paginado}){
    const pageNumber = []

    for (let i=1; i<=Math.ceil(allDogs/cardPerPage); i++){
        pageNumber.push(i)
    }
    return (
        <nav >
            <ul  className={style.nav}>
              {
                pageNumber?.map(number =>(
                    <li className={style.li_container}>
                        <a onClick={()=> paginado(number)}>{number}</a>
                    </li>
                ))
              }   
            </ul>
        </nav>
    )
}