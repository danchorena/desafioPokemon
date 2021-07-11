import React, {Fragment} from 'react';
import {useAppSelector} from "../../app/hooks";
import {selectPokemonDetails} from "../landing/landingSlice";
import Title from "../Title/Title";

const PokemonTypes = () =>{
    const {pokemonSelected,types} = useAppSelector(selectPokemonDetails);
    return (
        <div>
            <Title>Tipos de este pokemon</Title>
            {pokemonSelected?
                <Fragment>
                    {types.map((type,index)=>{
                        return(
                            <h4 key={index}><strong>Tipo #{index +1}: </strong>{type.type.name}</h4>
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