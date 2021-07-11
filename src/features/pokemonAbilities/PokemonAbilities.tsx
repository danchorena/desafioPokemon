import React, {Fragment} from 'react';
import {useAppSelector} from "../../app/hooks";
import {selectPokemonDetails} from "../landing/landingSlice";
import Title from "../Title/Title";

const PokemonAbilities = () =>{
    const {pokemonSelected,moves} = useAppSelector(selectPokemonDetails);
    return (
        <div>
            <Title>Abilidades de este pokemon</Title>
            {pokemonSelected?
                <Fragment>
                    {moves.map((move,index)=>{
                        return(
                            <h4 key={index}><strong>#{index +1}: </strong>{move.move.name}</h4>
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