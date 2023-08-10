import {Route, BrowserRouter, useLocation } from "react-router-dom";
import {Home, LandingPage, DogDetails, FormAddDog, NavBar} from "../src/index"


function App() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <BrowserRouter>
          {location.pathname !== "/" && <NavBar/>}
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/dog-detail/:id" component={DogDetails}/>
          <Route exact path="/dog" component={FormAddDog}/>
    </BrowserRouter>
  );
}
export default App;
