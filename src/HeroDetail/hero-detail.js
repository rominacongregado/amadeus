
import React, { useState, useEffect, useHistory, useParams } from 'react';
//import Heroes from "./Heroes/heroes";

export default function HeroDetail(props) {
    let { id } = useParams();
    const history = useHistory();
    const [hero, setHero] = useState({});

    useEffect(() => {
        let hero = props.heroservice.getHero(id);
        setHero(hero);
    }, []);

    function detectChange(e) {
        setHero({ ...hero, name: e.target.value });
    }

    function saveChanges() {
        props.heroservice.updateHero(hero);
        history.push('/dashboard');
    }

    function goBack() {
        history.goBack()
    }

    function addHero(hero) {
        props.heroservice.addHero(hero);
        let arHeroes = props.heroservice.getHeroes();
        setHeroes([...arHeroes]);
        let msg = "Se ha creado el heroe: " + `${hero.name}`;
        context.addMessage(oldArray => [...oldArray, msg]);
    }

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

    return (
        <div className="hero-detail">
            <h2>{hero.name} Details</h2>
            <div>
                <span>id: </span>
                {hero.id}
            </div>
            <div>
                <label>
                    name: <input placeholder="name" type="text" onChange={detectChangeName} />
                </label>
            </div>

            <button className="goback" onClick={goBack}>Go back</button>
            <button className="save" onClick={saveChanges}>Save</button>
        </div>
    )
}