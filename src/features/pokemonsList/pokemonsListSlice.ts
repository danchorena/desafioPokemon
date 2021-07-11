import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {requestPokemonsList} from './pokemonsListAPI';

export interface Pokemon {
    name:string,
    url:string
}

export interface PokemonsListState {
    value: Pokemon[],
    status: 'idle' | 'loading' | 'failed';
}

const initialState: PokemonsListState = {
    value: [],
    status: 'idle'
};

export const loadPokemonsListAsync = createAsyncThunk(
    'pokemonsList/requestPokemonsList',
    async () => {
        return await requestPokemonsList()
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
                state.value = []
            })
            .addCase(loadPokemonsListAsync.fulfilled,(state,action)=>{
                state.status = 'idle';
                state.value = action.payload;
            })

    }
});

export const selectPokemons = (state: RootState) => state.pokemonsList.value;

export default pokemonsListSlice.reducer;