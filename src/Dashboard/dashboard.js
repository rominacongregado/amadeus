import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./dashboard.css";
import HeroSearch from "./../HeroSearch/hero-search";

export default function Dashboard(props) {
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        let arHeroes = props.heroservice.getHeroes().slice(0, 5);
        setHeroes([...arHeroes]);
    }, []);

    return (
        <div>
            {
                heroes.map((hero, indx) =>
                    <Link className="col-1-4" to={`/detail/${hero.id}`} key={indx} heroService={props.heroservice}>
                        <div className="module hero">
                            <h4>{hero.name}</h4>
                        </div>
                    </Link>)
            }
            <HeroSearch heroService={props.heroservice}> </HeroSearch>
        </div>)

}
