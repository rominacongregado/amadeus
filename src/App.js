import "./App.css";
import React from "react";
import { BrowserRouter, Route, Redirect, Link } from "react-router-dom";
import Dashboard from "./Dashboard/dashboard";
import "./styles.css";
import Game from "./game";

function App() {
  return (
    <div className="tour-of-heroes">
      <h1> Tour of Heroes </h1>
      <BrowserRouter>
        <nav>
          <Link className="nav-element" to="/dashboard">Dashboard</Link>
          <Link className="nav-element" to="/heroes">Heroes</Link>
          <Link className="col-1-4" to={`/detail/${hero.id}`} key={hero.id}></Link>
        </nav>
        <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
        <Route path="/dashboard" render={(props) => <Dashboard {...props} />} />
        <Route path="/detail/:id" render={props => <HeroDetail heroService={heroService} {...props} />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
