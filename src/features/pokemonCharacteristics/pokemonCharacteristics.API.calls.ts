import {POKEMON_SPECIE_URL} from "../apiUrls";
import {baseGetAPIRequest} from "../utils";


export const getSinglePokemonCharacteristics = (pokemonId: string) => {
    return baseGetAPIRequest(POKEMON_SPECIE_URL + '/' + pokemonId);
};