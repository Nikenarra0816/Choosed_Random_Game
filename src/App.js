import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Minion } from "./components/Minion";
import { Hero } from "./components/Hero";
import { Spell } from "./components/Spell";
import { Heropower } from "./components/Heropower";
import { Weapon } from "./components/Weapon";
import { Enchantment } from "./components/Enchantment";
import { Add } from "./components/Add";
import {Axios} from 'axios'

import "./App.css";
import "./lib/font-awesome/css/all.min.css";

function App() {

  
const options = {
  method: 'GET',
  url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/info',
  headers: {
    'x-rapidapi-key': '9508137d1bmshce0f4ba39773c5fp1d4e2ajsnf883a41af1a9',
    'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
  

  return (
    <Router>
       <Header/>
       <Switch>
       <Route exact path="/">
            <Hero />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/Monion">
            <Minion />
          </Route>
          <Route path="/Spell">
            <Spell />
          </Route>
          <Route path="/Enchantment">
            <Enchantment />
          </Route>
          <Route path="/Weapon">
            <Weapon />
          </Route>
          <Route path="/Heropower">
            <Heropower />
          </Route>
        </Switch>
     

    </Router>
)};
  

export default App;
