import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Minion } from "./components/Minion";
import { Hero } from "./components/Hero";
import { Spell } from "./components/Spell";
import { Heropower } from "./components/Heropower";
import { Weapon } from "./components/Weapon";
import { Enchantment } from "./components/Enchantment";
import Add  from "./components/Add";
import Hooks from "./components/Hooks";

import './App.css'
import "./lib/font-awesome/css/all.min.css";


function App() {
  return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Hero />
          </Route>
          <Route path="/add">
            <Add />
          </Route>

          <Route path="/hooks">
            <Hooks />
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
    
  );
 }

export default App;
