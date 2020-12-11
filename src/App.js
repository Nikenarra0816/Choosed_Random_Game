import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Minion } from "./components/Minion";
import { Hero } from "./components/Hero";
import { Add } from "./components/Add";
import { Result } from "./components/Result";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";

import { GlobalProvider } from "./context/GlobalState";

function App() {
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
        </Switch>
     
    </Router>
  );
}

export default App;
