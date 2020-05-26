import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';

import * as serviceWorker from './serviceWorker';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Navb from "./Components/Navb/Navb";
import Home from "./Components/Home/Home";
import Reservation from "./Components/Reservation/Reservation";
import Support from "./Components/Support/Support.js";
import Map from "./Components/Map/Map.js";
import Footer from "./Components/Footer/Footer";



ReactDOM.render(
  <React.StrictMode>
  <Router>
    <Navb />
    <div>
      <Switch>
       
        <Route exact path="/" component={Home} />
      {/*   <Route path="/login" component={LoginForm} />*/}
        <Route path="/Reservation" component={Reservation} /> 
        <Route path="/Support" component={Support} />
        <Route path="/Map" component={Map} />
      </Switch>
    </div>
  <Footer />
  </Router>
</React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
