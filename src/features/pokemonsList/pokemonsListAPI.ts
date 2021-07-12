import {getPokemonsList} from "./pokemonsListAPI.calls";


export const requestPokemonsList = async (urlParams:string) => {
    try {
        const pokemonsList = await getPokemonsList(urlParams);
        return pokemonsList.data;
    } catch (e) {
        if (e.response) {
            console.log(e.response);
        } else {
            console.log(e);
        }
    }
};