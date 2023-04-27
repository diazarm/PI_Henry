import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from "../../components/card/Card";
import getDogs from "../../redux/action";
import NavBar from '../../components/navbar/NavBar';
import style from "../home/Home.module.css";
import { Link, NavLink } from 'react-router-dom';
import Paginado from '../../components/paginate/Paginate';


const Home = () => {
    const dispatch = useDispatch();
    const allDogs = useSelector((state) => state.dogs);

    const [currentPage, setCurrentPage] = useState(1);
    const [cardPerPage, setCardPerPage] = useState(8);
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
                <Link to="/Form">Crear Perro</Link>
            </div>
            <div className={style.welcome}>
                <h1 >Cuatro Patas</h1>
                <h3>Bienvenidos</h3>
            </div>
            <button onClick={handleClick}>
                volver a cargar los perros
            </button>
                <NavBar />
                <select>
                    <option value="asc">Ascendente</option>
                    <option value="desc">Descendente</option>
                </select>
                <select>
                    <option value="alive">vivo</option>
                    <option value="dead">muerto</option>
                </select>
                <select>
                    <option value="all">Todos</option>
                    <option value="created">Creados</option>
                    <option value="api">Existentes</option>
                </select>

                <Paginado
                cardPerPage={cardPerPage}
                allDogs={allDogs.length}
                paginado={paginado}/>

                    {/* se agrega una condición para manejar la situación en la que allDogs es undefined o null */}
                <div className={style.cards}>
                    {currentCard?.map((ele) => {
                        return (
                            <div>
                                <NavLink className={style.link} to={"/home/" + ele.id }>
                                    <Card id= {ele.id} name={ele.name} image={ele.image} 
                                    height={ele.height} weight={ele.weight} 
                                    life_span={ele.life_span} />
                                </NavLink>
                            </div>
                        );
                    })}
                </div>
        </div>
                    
    
    );
};

export default Home;
