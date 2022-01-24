import "./App.css";
import Navbar from "./component/navbar/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/movies/Home";
import Details from "./component/movies/details";
import Login from "./component/login/login";
import UserForm from "./component/signup/form";
import Favourite from "./component/favourite/favourite"
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/details/:id"} exact component={Details} />
          <Route path={"/login"} exact component={Login} />
          <Route path={"/signup"} exact component={UserForm} />
          <Route path={"/favourite"} exact component={Favourite}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
