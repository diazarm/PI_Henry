import { React, useState, useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  NavLink } from 'react-router-dom';
import getDogs from "../../redux/action";
import Card from "../../components/card/Card";
import Paginado from '../../components/paginate/Paginate';
import style from "../home/Home.module.css";
import SearchBar from "../../components/searchBar/SearchBar"


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
            <div>
                <div className={style.logo}>
                    <h1 >Cuatro Patas</h1>
                </div>
            </div>
            <div>
            <div className={style.deleteFilter}>
                <button onClick={handleClick}>
                    Eliminar los filtros
                </button>
            </div>
            <div className={style.filter}>
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
            </div>
            </div>
            <div>
                <SearchBar/>
            </div>
            <div className={style.acomodando}>
            <div className={style.cards}>
                    {currentCard?.map((ele) => {
                        console.log(ele)
                        return (
                            <div>
                                <NavLink className={style.link} to={"/home/" + ele.id }>
                                    <Card key={ele.id} id= {ele.id} name={ele.name} image={ele.image} 
                                    weight={ele.weight} temperament={ele.temperament} />
                                </NavLink>
                        </div>
                        );
                    })}
                </div>
            </div>
                <div>
                <Paginado
                    cardPerPage={cardPerPage}
                    allDogs={allDogs.length}
                    paginado={paginado}/>
                </div>
                   
        </div>
                    
    
    );
};

export default Home;
