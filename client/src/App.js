import {Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "../src/views/home/Home";
import LandingPage from './views/landing/LandingPage';
import FormAddDog from "./views/form/FormAddDog";
import DogDetails from "./views/detail/DogDetails";
//import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">
            <LandingPage/>
          </Route>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route exact path="/dog-detail/:id">
            <DogDetails />
          </Route>
          <Route exact path="/dog">
            <FormAddDog />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
