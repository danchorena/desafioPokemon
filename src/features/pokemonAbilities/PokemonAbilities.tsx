import React, {Fragment, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectPokemonDetails, selectPokemonDetailsStatus} from "../landing/landingSlice";
import Title from "../Title/Title";
import {capitalizeFirstLetter, replaceHyphenWithSpace} from "../utils";
import {PayloadAction} from "@reduxjs/toolkit";
import {loadPokemonsListAsync} from "../pokemonsList/pokemonsListSlice";

const PokemonAbilities = () => {
    const {pokemonSelected, name, moves} = useAppSelector(selectPokemonDetails);
    const pokemonName = name !== '' ? capitalizeFirstLetter(name) : '';
    const status = useAppSelector(selectPokemonDetailsStatus);
    const [search, setSearch] = useState("");

    const handleChangeSearch = (searchParam:string) =>{
        setSearch(searchParam);
    };


    if (status === 'loading') {
        return (
            <h2>Cargando...</h2>
        )
    }

    return (
        <div>
            {pokemonSelected ?
                <Fragment>
                    <Title>Habilidades de {pokemonName}</Title>
                    <label htmlFor="abilitySearch">Buscar habilidad: </label>
                    <input type="text" name="abilitySearch" id="abilitySearch"
                           value={search}
                           onChange={ (e: React.FormEvent<HTMLInputElement>) => handleChangeSearch(e.currentTarget.value)}
                    />
                    {moves.filter((move)=>move.move.name.includes(search)).map((move, index) => {
                        return (
                            <h4 key={index}>
                                <strong>#{index + 1}: </strong>{replaceHyphenWithSpace(move.move.name)}</h4>
                        )
                    })}
                </Fragment>
                :
                <h2>No se ha seleccionado un pokemon</h2>
            }
        </div>
    )
};

export default PokemonAbilities;