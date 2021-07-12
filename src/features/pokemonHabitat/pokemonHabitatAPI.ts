import {getSinglePokemonEncounters, getSinglePokemonHabitat} from "./pokemonHabitat.API.calls";

export const requestSinglePokemonHabitat = async (pokemonId: string) => {
    try{
        const habitat = await getSinglePokemonHabitat(pokemonId);
        return habitat.data.habitat.name;
    } catch (e) {
    if (e.response) {
        console.log(e.response);
    } else {
        console.log(e);
    }
    return ""
}
};

export const requestSinglePokemonEncounters = async (pokemonId: string) => {
    try {
        const encounters = await getSinglePokemonEncounters(pokemonId);
        return (encounters.data).reduce(
            (accumulator: string[], encounter: { location_area: { name: string; }; }) =>
                [...accumulator, encounter.location_area.name], [])
    } catch (e) {
        if (e.response) {
            console.log(e.response);
        } else {
            console.log(e);
        }
        return []
    }
};

