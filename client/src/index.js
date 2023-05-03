import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {Provider}  from "react-redux";
import App from './App';
import store from "../src/redux/store";
import Home from "../src/views/home/Home";
import LandingPage from './views/landing/LandingPage';
import FormAddDog from "./views/form/FormAddDog";
import DogDetails from "./views/detail/DogDetails";
import NavBar from './components/navBar/NavBar';


ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

export {Home, LandingPage, FormAddDog, DogDetails, NavBar}