import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {loadPokemonsListAsync, selectPokemons} from './pokemonsListSlice';
import Title from "../Title/Title";
import ActionTable from "../actionTable/ActionTable";


const PokemonsList = () => {
    const list = useAppSelector(selectPokemons);
    const dispatch = useAppDispatch();
    const columns = ["Id", "Nombre"];
    useEffect(() => {
        dispatch(loadPokemonsListAsync());
    }, [dispatch]);

    return (
        <div>
            <Title>Pokemons List</Title>
            <ActionTable columns={columns} data={list}/>
        </div>
    )
};

export default PokemonsList;