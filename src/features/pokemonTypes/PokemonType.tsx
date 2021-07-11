import React, {Fragment} from 'react';
import {useAppSelector} from "../../app/hooks";
import {selectPokemonDetails, selectPokemonDetailsStatus} from "../landing/landingSlice";
import Title from "../Title/Title";
import {capitalizeFirstLetter} from '../utils';

const PokemonTypes = () => {
    const {pokemonSelected, name, types} = useAppSelector(selectPokemonDetails);
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
                    {types.length > 1 ?
                        <Title>{pokemonName} es de los tipos</Title>
                        :
                        <Title>{pokemonName} es del tipo</Title>
                    }
                    {types.map((type, index) => {
                        return (
                            <h4 key={index}><strong>Tipo #{index + 1}: </strong>{type.type.name}</h4>
                        )
                    })}
                </Fragment>
                :
                <h2>No se ha seleccionado un pokemon</h2>
            }
        </div>
    )
};

export default PokemonTypes;