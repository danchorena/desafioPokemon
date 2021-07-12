import {getSinglePokemonCharacteristics} from "./pokemonCharacteristics.API.calls";

export const requestSinglePokemonCharacteristics = async (pokemonId: string) => {
    try {
        const characteristics = await getSinglePokemonCharacteristics(pokemonId);
        return {
            baseHappiness: characteristics.data.base_happiness,
            captureRate: characteristics.data.capture_rate,
            flavourText: characteristics.data.flavor_text_entries[0].flavor_text,
            growthRate: characteristics.data.growth_rate.name,
        }
    } catch (e) {
        if (e.response) {
            console.log(e.response);
        } else {
            console.log(e);
        }
        return {
            baseHappiness:"",
            captureRate: "",
            flavourText: "",
            growthRate: "",
        }
    }
};