import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from "../../components/card/Card";
import getDogs from "../../redux/action";
import NavBar from '../../components/searchBar/SearchBar';
import style from "../home/Home.module.css";
import {  NavLink } from 'react-router-dom';
import Paginado from '../../components/paginate/Paginate';


const Home = () => {
    const dispatch = useDispatch();
    const allDogs = useSelector((state) => state.dogs);

    const [currentPage, setCurrentPage] = useState(1);
    const [cardPerPage] = useState(8);
    const indexOfLastCard = currentPage * cardPerPage;
    const indexOfFirstCard = indexOfLastCard - cardPerPage;
    const currentCard = allDogs.slice(indexOfFirstCard, indexOfLastCard);

    const paginado = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getDogs());
    }, [dispatch]);

    function handleClick(ele) {
        ele.preventDefault();
        dispatch(getDogs());
    };

    return (
        <div>
            <div className={style.createDog}>
                <NavLink to="/Form">Crear Perro</NavLink>
            </div>
            <div className={style.logo}>
                <h1 >Cuatro Patas</h1>
            </div>
            <div className={style.welcome}>
                <h3>Bienvenidos</h3>
            </div>
            <div className={style.deleteFilter}>
                <button onClick={handleClick}>
                    Eliminar los filtros
                </button>
            </div>
            
                <NavBar />
                <select>
                    <option disabled selected defaultValue>Temperamento</option>
                    <option value="bdd-api">Todos </option>
                    <option value="bdd">Todos de la Bdd</option>
                    <option value="api">Todos de la Api</option>
                </select>
                <select>
                    <option disabled selected defaultValue>Ordenado alfabeticamente</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
                <select>
                    <option disabled selected defaultValue>Filtrado por Peso</option>
                    <option value="max_weight">Max</option>
                    <option value="min_weight">Min</option>
                </select>

                <Paginado
                cardPerPage={cardPerPage}
                allDogs={allDogs.length}
                paginado={paginado}/>

                    {/* se agrega una condición para manejar la situación en la que allDogs es undefined o null */}
                <div className={style.cards}>
                    {currentCard?.map((ele) => {
                        console.log(ele)
                        return (
                            <div>
                                <NavLink className={style.link} to={"/home/" + ele.id }>
                                    <Card id= {ele.id} name={ele.name} image={ele.image} 
                                    weight={ele.weight} temperament={ele.temperament} />
                                </NavLink>
                        </div>
                        );
                    })}
                </div>
                    <Paginado
                    cardPerPage={cardPerPage}
                    allDogs={allDogs.length}
                    paginado={paginado}/>
        </div>
                    
    
    );
};

export default Home;
