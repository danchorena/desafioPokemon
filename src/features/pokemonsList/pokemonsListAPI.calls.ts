import {baseGetAPIRequest} from "../utils";
import {POKEMONS_LIST_URL} from "../apiUrls";

export const getPokemonsList = (urlParams:string) =>{
    if(urlParams === ''){
        return baseGetAPIRequest(POKEMONS_LIST_URL);
    }else{
        return baseGetAPIRequest(POKEMONS_LIST_URL + '/' + urlParams);
    }

};