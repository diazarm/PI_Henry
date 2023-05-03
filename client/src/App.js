import {Route, BrowserRouter } from "react-router-dom";
import {Home, LandingPage, DogDetails, FormAddDog, NavBar} from "../src/index"


function App() {
  return (
    <BrowserRouter>
          <Route exact path="/" component={LandingPage}/>
          <NavBar/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/dog-detail/:id" component={DogDetails}/>
          <Route exact path="/dog" component={FormAddDog}/>
    </BrowserRouter>
  );
}
export default App;
