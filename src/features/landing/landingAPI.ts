import {getSinglePokemon} from "./landing.API.calls";


export const requestSinglePokemon = async (pokemonId:string) => {
    try {
        const pokemon = await getSinglePokemon(pokemonId);
        return pokemon.data;
    } catch (e) {
        if (e.response) {
            console.log(e.response);
        } else {
            console.log(e);
        }
    }
};