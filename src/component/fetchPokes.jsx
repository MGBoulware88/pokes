//with endpoint "https://pokeapi.co/api/v2/pokemon"
import React, { useState, createContext } from 'react';

export const PokeContext = createContext();

const FetchPokes = () => {
    //use state to store the Pokemon data
    const [pokemonData, setPokemonData] = useState([]);

    function fetchPokemonData() {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(response => {
                const pokemonRawData = response.json();
                return pokemonRawData;
            }).then(pokemonRawData => {
                const pokemonJsonData = pokemonRawData.results;
                const parsedPokes = pokemonJsonData.map(pokemon => {
                    let newPoke = [];
                    newPoke.push(pokemon.name);
                    console.log(pokemon.name);
                    return newPoke;
                })
                setPokemonData(parsedPokes);                
                
            });

    }

    return (
        <div>
            <button onClick={() => fetchPokemonData()} type="button">Fetch Pokemon</button>
            <br />
            <br />
            <ul>
                {pokemonData.map(pokemon => {
                    return (
                        <li>{pokemon}</li>
                    );
                })}
            </ul>
        </div>
    )
}

export default FetchPokes;