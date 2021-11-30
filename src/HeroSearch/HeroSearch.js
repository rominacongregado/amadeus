import React from 'react';

export default function HeroSearch(props) {
    const [searchHeroes, setSearchHerores] = useState([])

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

    function handleChange(e) {
        let res = props.heroservice.searchHeroes(e.target.value);
        setSearchHerores([...res]);
    };
}

return (
    <>
        <input id="search-box" onKeyUp={handleChange} />
        <HeroesSearched />
    </>
)