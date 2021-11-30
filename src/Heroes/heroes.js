import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import LogContext from './../Context/LogContext';

export default function Heroes(props) {
    const [heroes, setHeroes] = useState([]);
    const [hero, setHero] = useState({ id: "id", name: "name" });
    const context = useContext(LogContext);

    useEffect(() => {
        let msg = 'Carga pantalla heroes';
        context.addMessage(oldArray => [...oldArray, msg]);
        let arHeroes = props.heroservice.getHeroes();
        setHeroes([...arHeroes]);
    }, []);


    function deleteHero(hero) {
        props.heroservice.deleteHero(hero);
        let arHeroes = props.heroservice.getHeroes();
        setHeroes([...arHeroes]);
        let msg = "Se ha eliminado el heroe con ID: " + `${hero.id}`;
        context.addMessage(oldArray => [...oldArray, msg]);
    }

    function detectChangeName(e) {
        setHero({ ...hero, name: e.target.value });
    }

    function addHero(hero) {
        props.heroService.addHero(hero);
        let arHeroes = props.heroService.getHeroes();
        setHeroes([...arHeroes]);
        let msg = "Se ha creado el heroe: " + `${hero.name}`;
        context.addMessage(oldArray => [...oldArray, msg]);
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
                            <Link to={`/detail/${h.id}`} key={h.id} heroService={props.heroService}>
                                <span className="badge">{h.id}</span> {h.name}
                            </Link>
                            <button className="delete" title="delete hero" onClick={() => deleteHero(h)}> x</button >
                        </li>)}
                </ul> </> : <div>error </div>
    );


}
