import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {requestPokemonsList} from './pokemonsListAPI';

export interface InnerPokemon {
    name:string,
    url:string
}

export interface Pokemon {
    count:number,
    previous:string,
    next:string
    results:InnerPokemon[]
}

export interface PokemonsListState {
    value: Pokemon,
    status: 'idle' | 'loading' | 'failed';
}

const initialState: PokemonsListState = {
    value: {
        count:0,
        previous:'',
        next:'',
        results:[]
    },
    status: 'idle'
};

export const loadPokemonsListAsync = createAsyncThunk(
    'pokemonsList/requestPokemonsList',
    async (urlParams:string) => {
        return await requestPokemonsList(urlParams)
    }
);

export const pokemonsListSlice = createSlice({
    name: 'pokemonsList',
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder
            .addCase(loadPokemonsListAsync.pending,(state) =>{
                state.status = 'loading';
                state.value = {
                    count:0,
                    previous:'',
                    next:'',
                    results:[]
                }
            })
            .addCase(loadPokemonsListAsync.fulfilled,(state,action)=>{
                state.status = 'idle';
                state.value = action.payload;
            })

    }
});

export const selectPokemons = (state: RootState) => state.pokemonsList.value;

export default pokemonsListSlice.reducer;