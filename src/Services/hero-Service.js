export default class HeroService {
    heroes = [];

    constructor() {
        this.initialize();
    }

    initialize() {
        this.heroes = [
            { id: 11, name: 'Mr. Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ]
    }

    getHeroes() {
        return this.heroes;
    }

    getHero(id) {
        return this.heroes.find((hero) => hero.id == id);
    }

    addHero(hero) {
        hero.id = this.generateId();
        this.heroes.push(hero);
        return hero;
    }

    generateId() {
        let ids = this.heroes.map(hero => hero.id);
        let maxId = Math.max.apply(null, ids);
        return ++maxId;
    }


    updateHero(hero) {
        const target = this.heroes.find(h => h.id === hero.id);
        target.name = hero.name;
        return target;
    }

    deleteHero(hero) {
        return this.heroes.splice(this.heroes.findIndex(h => h.id === hero.id), 1);
    }

    searchHeroes(name) {
        if (name) {
            return this.heroes.filter(hero => hero.name.toLowerCase().indexOf(name.toLowerCase()) !== -1);
        } else {
            return [];
        }
    }



}