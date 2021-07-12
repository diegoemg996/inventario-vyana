import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Edicion } from "../pages/edicion/Edicion";
import { Inicio } from "../pages/inicio/Inicio";
import { Movimientos } from "../pages/movimientos/Movimientos";
import { Navbar } from "../shared/Navbar/Navbar";
import './router.css';

const RouterApp = ()=> {

  return (
    <Router>
      <div className="router-container">
        <Navbar/>
        <Switch>
          <Route exact path="/movimientos">
            <Movimientos />
          </Route>
          <Route exact path="/edicion">
            <Edicion />
          </Route>
          <Route path="/">
            <Inicio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default RouterApp;