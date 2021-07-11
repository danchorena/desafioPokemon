import {baseGetAPIRequest} from "../utils";
import {POKEMONS_LIST_URL} from "../apiUrls";

export const getSinglePokemon = (pokemonId:string) =>{
    return baseGetAPIRequest(POKEMONS_LIST_URL+'/'+pokemonId);
};