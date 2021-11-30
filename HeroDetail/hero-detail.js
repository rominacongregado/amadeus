export default function HeroDetail(props) {
    let { id } = useParams();
    const history = useHistory();
    const [hero, setHero] = useState({});

    useEffect(() => {
        let hero = props.heroService.getHero(id);
        setHero(hero);
    }, []);

    function detectChange(e) {
        setHero({ ...hero, name: e.target.value });
    }

    function saveChanges() {
        props.heroService.updateHero(hero);
        history.push('/dashboard');
    }

    function goBack() {
        history.goBack()
    }
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
                name: <input placeholder="name" onChange={detectChange} />
            </label>
        </div>
        <button className="goback" onClick={goBack}>Go back</button>
        <button className="save" onClick={saveChanges}>Save</button>
    </div>
)