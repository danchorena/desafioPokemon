import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import pokemonsListReducer from '../features/pokemonsList/pokemonsListSlice';
import pokemonDetailsReducer from '../features/landing/landingSlice';
import pokemonHabitatReducer from '../features/pokemonHabitat/pokemonHabitatSlice';
import pokemonCharacteristicsReducer from "../features/pokemonCharacteristics/pokemonCharacteristicsSlice";
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        pokemonsList: pokemonsListReducer,
        pokemonDetails:pokemonDetailsReducer,
        pokemonHabitat:pokemonHabitatReducer,
        pokemonCharacteristics:pokemonCharacteristicsReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
