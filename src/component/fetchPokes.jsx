//with endpoint "https://pokeapi.co/api/v2/pokemon"
import React, { useState, createContext } from 'react';

export const PokeContext = createContext();

const FetchPokes = () => {
    //use state to store the Pokemon data
    const [pokemonData, setPokemonData] = useState([]);


    const fetchPokeData = e => {
        e.preventDefault();
        console.log(pokemonData + " ----from grabTheData");

        return getPokemonData();

        // console.log("GTD pokemonData is type: " + typeof pokemonData);
        // console.log(pokemonData);
    }

    async function getPokemonData() {
        const somePokeData = await fetch("https://pokeapi.co/api/v2/pokemon");
        const jsonPokeData = await somePokeData.json();
        let getPokemonNames = jsonPokeData.results.map((pokemon, i) => {
            return pokemon.name
        });
        let pokemonNames = getPokemonNames;
        console.log("the names are " + pokemonNames);
        console.log("pokemonData is type: " + typeof pokemonData);
        console.log(pokemonData);
        return setPokemonData(pokemonNames);
    };


    return (
        <form onSubmit={e => {
            fetchPokeData(e);
        }}>
            <button type="submit">Fetch Pokemon</button>
        </form>
    )
}

export default FetchPokes;