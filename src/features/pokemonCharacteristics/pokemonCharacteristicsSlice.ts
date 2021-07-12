import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {requestSinglePokemonCharacteristics} from "./pokemonCharacteristicsAPI";

export interface PokemonCharacteristicsState {
    value: {
        baseHappiness:string
        captureRate:string
        flavourText:string
        growthRate:string
    },
    status: 'idle' | 'loading' | 'failed';
}

const initialState: PokemonCharacteristicsState = {
    value: {
        baseHappiness:"",
        captureRate:"",
        flavourText:"",
        growthRate:"",
    },
    status: 'idle'
};

export const loadPokemonCharacteristicsAsync = createAsyncThunk(
    'pokemonCharacteristics/requestPokemonCharacteristics',
    async (pokemonId: string) => {
        const {baseHappiness,captureRate,flavourText,growthRate} = await requestSinglePokemonCharacteristics(pokemonId);
        return {baseHappiness,captureRate,flavourText,growthRate}
    }
);

export const pokemonCharacteristicsSlice = createSlice(
    {
        name:'pokemonCharacteristics',
        initialState,
        reducers:{},
        extraReducers:(builder)=>{
            builder
                .addCase(loadPokemonCharacteristicsAsync.pending,(state)=>{
                    state.status = 'loading';
                    state.value = {
                            baseHappiness:"",
                            captureRate:"",
                            flavourText:"",
                            growthRate:"",
                        }
                })
                .addCase(loadPokemonCharacteristicsAsync.fulfilled,(state,action)=>{
                    state.status = 'idle';
                    state.value = {
                        baseHappiness:action.payload.baseHappiness,
                        captureRate:action.payload.captureRate,
                        flavourText:action.payload.flavourText,
                        growthRate:action.payload.growthRate,
                    }
                })
        }
    }
);

export const selectPokemonCharacteristics = (state: RootState) => state.pokemonCharacteristics.value;
export const selectPokemonCharacteristicsStatus = (state: RootState) => state.pokemonCharacteristics.status;

export default pokemonCharacteristicsSlice.reducer