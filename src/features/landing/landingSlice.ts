import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {pokemonsListSlice} from "../pokemonsList/pokemonsListSlice";
import {requestSinglePokemon} from "./landingAPI";

export interface InnerStat {
    name:string,
    url:string
}
export interface InnerMove {
    name:string
}

export interface InnerType {
    name:string
}

export interface Move {
    name:string,
    move:InnerMove
}

export interface Stat {
    base_stat:string,
    effort:string
    stat:InnerStat
}

export interface Type {
    type:InnerType
}
export interface PokemonDetails {
    pokemonSelected:boolean,
    expBase: string,
    height: string,
    weight: string,
    moves: Move[],
    stats: Stat[],
    types: Type[],
}

export interface PokemonDetailsState {
    value: PokemonDetails,
    status: 'idle' | 'loading' | 'failed';
}

const initialState: PokemonDetailsState = {
    value: {
        pokemonSelected:false,
        expBase: "",
        height: "",
        weight: "",
        moves: [],
        stats: [],
        types: []
    },
    status: 'idle'
};

export const loadPokemonDetailsAsync = createAsyncThunk(
    'pokemonDetails/requestPokemonDetails',
    async (pokemonId: string) => {
        return await requestSinglePokemon(pokemonId);
    }
);

export const pokemonDetailsSlice = createSlice({
    name:'pokemonDetails',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(loadPokemonDetailsAsync.pending,(state,action)=>{
                state.status = 'loading';
                state.value = {
                    pokemonSelected:false,
                    expBase: "",
                    height: "",
                    weight: "",
                    moves: [],
                    stats: [],
                    types: []
                }
            })
            .addCase(loadPokemonDetailsAsync.fulfilled,(state,action)=>{
                state.status = 'idle';
                state.value = {
                    pokemonSelected:true,
                    expBase: action.payload.base_experience,
                    height: action.payload.height,
                    weight: action.payload.weight,
                    moves: action.payload.moves,
                    stats: action.payload.stats,
                    types: action.payload.types
                }
            })
    }
});

export const {} = pokemonsListSlice.actions;
export const selectPokemonDetails = (state:RootState)=> state.pokemonDetails.value;

export default pokemonDetailsSlice.reducer;