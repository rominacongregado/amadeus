
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Heroes(props) {

    const [heroes, setHeroes] = useState([]);
    const [hero, setHero] = useState({ id: "id", name: "name" });

    useEffect(() => {
        let arHeroes = props.heroservice.getHeroes();
        setHeroes([...arHeroes]);
    }, []);

    function deleteHero(hero) {
        props.heroservice.deleteHero(hero);
        let arHeroes = props.heroservice.getHeroes();
        setHeroes([...arHeroes]);
    }

    function detectChangeName(e) {
        setHero({ ...hero, name: e.target.value });
    }

    function addHero(hero) {
        props.heroservice.addHero(hero);
        let arHeroes = props.heroservice.getHeroes();
        setHeroes([...arHeroes]);
    }



    return (
        heroes.length > 0 ?
            <>
                <div >
                    <label>
                        name: <input placeholder="name" type="text" onChange={detectChangeName} />
                    </label>

                    <button className="add-button" onClick={() => addHero(hero)}>
                        Add hero
                    </button>
                </div>
                <ul className="heroes">
                    {heroes.map(h =>

                        <li>
                            <Link to={`/detail/${h.id}`} key={h.id} heroService={props.heroservice}>
                                <span className="badge">{h.id}</span> {h.name}
                            </Link>
                            <button className="delete" title="delete hero" onClick={() => deleteHero(h)}> x</button >
                        </li>)}
                </ul> </> : <div>error </div>
    );
}