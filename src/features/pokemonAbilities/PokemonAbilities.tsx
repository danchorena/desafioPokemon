import React, {Fragment} from 'react';
import {useAppSelector} from "../../app/hooks";
import {selectPokemonDetails, selectPokemonDetailsStatus} from "../landing/landingSlice";
import Title from "../Title/Title";
import {capitalizeFirstLetter, replaceHyphenWithSpace} from "../utils";

const PokemonAbilities = () => {
    const {pokemonSelected, name, moves} = useAppSelector(selectPokemonDetails);
    const pokemonName = name !== '' ? capitalizeFirstLetter(name) : '';
    const status = useAppSelector(selectPokemonDetailsStatus);
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