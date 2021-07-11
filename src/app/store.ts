import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import pokemonsListReducer from '../features/pokemonsList/pokemonsListSlice';
import pokemonDetailsReducer from '../features/landing/landingSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        pokemonsList: pokemonsListReducer,
        pokemonDetails:pokemonDetailsReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
