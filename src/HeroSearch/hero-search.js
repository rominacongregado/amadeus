import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeroService from "../Services/hero-Service";
import "./hero-search.css";

const heroService = new HeroService();

export default function HeroSearch(props) {

    const [searchHeroes, setSearchHeroes] = useState([])

    function handleChange(e) {
        let res = heroService.searchHeroes(e.target.value);
        setSearchHeroes([...res]);
    };

    const HeroesSearched = (props) => {
        return searchHeroes.length > 0 ?
            <ul className="search-result" >
                {searchHeroes.map((hero) =>
                    <li key={hero.id}>
                        <Link to={`/detail/${hero.id}`} key={hero.id}>
                            {hero.name}
                        </Link>
                    </li>
                )}
            </ul >
            : <div></div>
    }

    return (
        <>
            <input id="search-box" onKeyUp={handleChange} />
            <HeroesSearched />
        </>
    )


}