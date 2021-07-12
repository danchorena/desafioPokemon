import {baseGetAPIRequest} from "../utils";
import {POKEMON_ENCOUNTERS_URL, POKEMON_SPECIE_URL, POKEMONS_LIST_URL} from "../apiUrls";

export const getSinglePokemonHabitat = (pokemonId: string) => {
    return baseGetAPIRequest(POKEMON_SPECIE_URL + '/' + pokemonId);
};
export const getSinglePokemonEncounters = (pokemonId: string) => {
    return baseGetAPIRequest(POKEMONS_LIST_URL + '/' + pokemonId + '/' + POKEMON_ENCOUNTERS_URL);
};