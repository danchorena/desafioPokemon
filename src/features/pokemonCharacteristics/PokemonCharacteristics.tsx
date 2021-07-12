import React, {Fragment} from "react";
import {useAppSelector} from "../../app/hooks";
import {selectPokemonDetails} from "../landing/landingSlice";
import {capitalizeFirstLetter} from "../utils";
import Title from "../Title/Title";
import {selectPokemonCharacteristics, selectPokemonCharacteristicsStatus} from "./pokemonCharacteristicsSlice";

const PokemonCharacteristics = () => {
    const {pokemonSelected, name} = useAppSelector(selectPokemonDetails);
    const pokemonName = name !== '' ? capitalizeFirstLetter(name) : '';
    const {baseHappiness, captureRate, flavourText, growthRate} = useAppSelector(selectPokemonCharacteristics);
    const status = useAppSelector(selectPokemonCharacteristicsStatus);

    if (status === 'loading') {
        return (
            <h2>Cargando...</h2>
        )
    }
    return (
        <div>
            {pokemonSelected ?
                <Fragment>
                    <span>Detalle de {pokemonName}</span>
                    <h4><span>{flavourText}</span></h4>
                    <Title>Características de {pokemonName}</Title>
                    <h4><strong>Felicidad base:</strong> {baseHappiness} puntos</h4>
                    <h4><strong>Ratio de captura:</strong> {captureRate}</h4>
                    <h4><strong>Ratio de crecimiento:</strong> {growthRate}</h4>
                </Fragment>
                :
                <h2>No se ha seleccionado un pokemon</h2>
            }
        </div>
    )
};

export default PokemonCharacteristics;