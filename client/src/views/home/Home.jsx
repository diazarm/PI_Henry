import React from 'react';
import {  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from "../../components/card/Card";
import getDogs from "../../redux/action";
import NavBar from '../../components/navbar/NavBar';
import style from "../home/Home.module.css";
import { Link, NavLink } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch();
    const allDogs = useSelector((state) => state.dogs);

    //const [currentPage, setCurrentPage] = useState(1);
    //const [cardPerPage, setCardPerPage] = useState(4);


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
                    {/* se agrega una condición para manejar la situación en la que allDogs es undefined o null */}
                <div className={style.cards}>
                    {allDogs?.map((ele) => {
                        return (
                            <div>
                                <NavLink className={style.link} to={"/detail"}>
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
