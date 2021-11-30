import "./App.css";
import React from "react";
import { BrowserRouter, Route, Redirect, Link } from "react-router-dom";
import "./styles.css";
import Dashboard from "./Dashboard/dashboard";
import HeroService from "./Services/hero-service";
import HeroDetail from "./HeroDetail/hero-detail";
import Heroes from "./Heroes/heroes";
import "./styles.css";
//import Game from "./game";

const heroService = new HeroService();

function App() {
  return (
    <div className="tour-of-heroes">
      <h1> Tour of Heroes </h1>
      <BrowserRouter>
        <nav>
          <Link className="nav-element" to="/dashboard">Dashboard</Link>
          <Link className="nav-element" to="/heroes">Heroes</Link>
        </nav>
        <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
        <Route path="/dashboard" render={(props) => <Dashboard heroservice={heroService} {...props} />} />
        <Route path="/detail/:id" render={(props) => <HeroDetail heroservice={heroService} {...props} />} />
        <Route path="/heroes" render={(props) => <Heroes heroservice={heroService} {...props} />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
