import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Minion } from "./components/Minion";
import { Hero } from "./components/Hero";
import { Add } from "./components/Add";
import Search from './components/Search'

import "./App.css";
import "./lib/font-awesome/css/all.min.css";

function App() {

  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });
  const apiurl = "http://www.omdbapi.com/?apikey=faf7e5bb";

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;

        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }
  
  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    });
  }

  return (
    <Router>
       <Header/>
       <Switch>
       <Route exact path="/">
            <Hero />
          </Route>
          {/* <Route path="/add">
            <Add />
          </Route> */}
          <Route path="/Monion">
            <Minion />
          </Route>
        </Switch>
     <main>
     <Search handleInput={handleInput} search={search} />
     </main>

    </Router>

   


  );
}

export default App;
