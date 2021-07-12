import React, { Fragment } from 'react';
import {useAppSelector} from "../../app/hooks";
import {selectPokemonDetails, selectPokemonDetailsStatus} from '../landing/landingSlice';
import Title from '../Title/Title';
import {capitalizeFirstLetter, replaceHyphenWithSpace} from "../utils";

const PokemonStats = () =>{
    const {pokemonSelected,expBase,height,weight,name,stats} = useAppSelector(selectPokemonDetails);
    const pokemonName = name !== '' ? capitalizeFirstLetter(name) : '';
    const status = useAppSelector(selectPokemonDetailsStatus);
    if (status === 'loading') {
        return (
            <h2>Cargando...</h2>
        )
    }
    return (
        <div>
            {pokemonSelected?
                <Fragment>
                    <Title>Estadísticas de {pokemonName}</Title>
                    <h4><strong>Experiencia Base:</strong> {expBase} puntos</h4>
                    <h4><strong>Estatura:</strong> {(parseFloat(height) / 10).toFixed(2)} m</h4>
                    <h4><strong>Peso:</strong> {(parseFloat(weight)/10).toFixed(2)} kg</h4>
                    {stats.map((stat,index)=>{
                        return (
                            <h4 key={index}><strong>{replaceHyphenWithSpace(stat.stat.name)}: </strong>{stat.base_stat}</h4>
                        )
                    })}
                </Fragment>
                :
                <h2>No se ha seleccionado un pokemon</h2>
            }
        </div>
    )
};

export default PokemonStats;