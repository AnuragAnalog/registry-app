import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import Registry from "./Registry";
import './App.css';

function App() {
  return (
    <div className="App">
      Registry App
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>

          <Route path='/registry'>
            <Registry />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
