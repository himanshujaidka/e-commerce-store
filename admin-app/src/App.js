import React, { useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './containers/Home';
import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";
import PrivateRoute from './components/HOC/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn, getAllCategory } from "./actions";
import Products from "./containers/Products";
import Orders from "./containers/Orders";
import Category from "./containers/Category";

function App() {

  const dispatch = useDispatch();
  const auth = useSelector( state => state.auth)

  useEffect(() => {
    if(!auth.authenticate){
      dispatch(isUserLoggedIn());
    }
    dispatch(getAllCategory());
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path="/" exact component={Home} />
          <PrivateRoute path="/category" component={Category}/>
          <PrivateRoute path="/products" component={Products} />
          <PrivateRoute path="/orders" component={Orders} />

          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
