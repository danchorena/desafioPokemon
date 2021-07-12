import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {requestSinglePokemonEncounters, requestSinglePokemonHabitat} from "./pokemonHabitatAPI";

export interface PokemonHabitatState {
    value: {
        habitatName:string,
        encounters:string[]
    },
    status: 'idle' | 'loading' | 'failed';
}

const initialState: PokemonHabitatState = {
    value: {
        habitatName:"",
        encounters:[]
    },
    status: 'idle'
};

export const loadPokemonHabitatAsync = createAsyncThunk(
    'pokemonHabitat/requestPokemonHabitat',
    async (pokemonId: string) => {
        const habitat = await requestSinglePokemonHabitat(pokemonId);
        const zones = await requestSinglePokemonEncounters(pokemonId);
        return {
            habitatName:habitat,
            encounters:zones
        }
    }
);

export const pokemonHabitatSlice = createSlice({
    name: 'pokemonHabitat',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadPokemonHabitatAsync.pending, (state) => {
                state.status = 'loading';
                state.value = {
                    habitatName:"",
                    encounters:[]
                };
            })
            .addCase(loadPokemonHabitatAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value = {
                    habitatName:action.payload.habitatName,
                    encounters:action.payload.encounters
                }
            })
    }
});

export const selectPokemonHabitat = (state: RootState) => state.pokemonHabitat.value;
export const selectPokemonHabitatStatus = (state: RootState) => state.pokemonHabitat.status;

export default pokemonHabitatSlice.reducer;