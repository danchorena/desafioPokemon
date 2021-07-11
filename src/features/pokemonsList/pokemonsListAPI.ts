import {getPokemonsList} from "./pokemonsListAPI.calls";


export const requestPokemonsList = async () => {
    try {
        const pokemonsList = await getPokemonsList();
        return pokemonsList.data.results;
    } catch (e) {
        if (e.response) {
            console.log(e.response);
        } else {
            console.log(e);
        }
    }
};