import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./dashboard.css";

export default function Dashboard(props) {
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        let arHeroes = props.heroservice.getHeroes().slice(0, 5);
        setHeroes([...arHeroes]);
    }, []);

    return (
        (heroes.length > 0) ?
            heroes.map((hero, indx) =>
                <Link className="col-1-4" to={'/detail/${hero.id}'} key={hero.id}>
                    <div className="module hero">
                        <h4>{hero.name}</h4>
                    </div>
                </Link>
            ) : <div>Error. Cargando h�roes�. </div>);
}
