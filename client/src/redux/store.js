//applyMiddleware + funcionalidaedes y compose ensamblar herramientas.
import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from "./reducer";
//thunkMiddleware ayuda con las tareas asincronicas.
import thunkMiddleware from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
   //el rootReducer mantiene la logica y el estado organizado
    rootReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;