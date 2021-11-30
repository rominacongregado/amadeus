import "./App.css";
import React, {useState} from "react";
import { BrowserRouter, Route, Redirect, Link } from "react-router-dom";
import Dashboard from "./Dashboard/dashboard";
import HeroService from "./Services/hero-Service";
import HeroDetail from "./HeroDetail/hero-detail";
import Heroes from "./Heroes/heroes";
import "./styles.css";
import Game from "./game";
import LogContext from './Context/LogContext';
import Log from './Context/Log';

const heroService = new HeroService();

export default function App() {

  const [log, setLog] = useState([]);

  return (
    <div className="tour-of-heroes">
      <LogContext.Provider value={{
            log: log,
            addMessage: setLog
        }}>
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
      <Log/>
        </LogContext.Provider>
    </div>
  );
}
