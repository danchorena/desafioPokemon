import React, {Fragment} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {searchAbility,selectPokemonDetails, selectPokemonDetailsStatus} from "../landing/landingSlice";
import Title from "../Title/Title";
import {capitalizeFirstLetter, replaceHyphenWithSpace} from "../utils";

const PokemonAbilities = () => {
    const dispatch = useAppDispatch();
    const {pokemonSelected, name, moves} = useAppSelector(selectPokemonDetails);
    const pokemonName = name !== '' ? capitalizeFirstLetter(name) : '';
    const status = useAppSelector(selectPokemonDetailsStatus);
    const handleSearchAbility = (searchTerm:string) =>{
        const newMoves = moves.filter((move)=>move.move.name.includes(searchTerm));
        dispatch(searchAbility(newMoves));
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
                    <input type="text" name="abilitySearch" id="abilitySearch"
                           onChange={ (e: React.FormEvent<HTMLInputElement>) => handleSearchAbility(e.currentTarget.value)}
                    />
                    {moves.map((move, index) => {
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