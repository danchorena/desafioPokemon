import {baseGetAPIRequest} from "../utils";
import {POKEMONS_LIST_URL} from "../apiUrls";

export const getPokemonsList = () =>{
    return baseGetAPIRequest(POKEMONS_LIST_URL);
};