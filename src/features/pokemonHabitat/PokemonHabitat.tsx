import React, {Fragment} from "react";
import Title from "../Title/Title";
import {useAppSelector} from "../../app/hooks";
import {selectPokemonHabitat, selectPokemonHabitatStatus} from "./pokemonHabitatSlice";
import {selectPokemonDetails} from "../landing/landingSlice";
import {capitalizeFirstLetter, replaceHyphenWithSpace} from "../utils";

const PokemonHabitat = () => {
    const {pokemonSelected, name} = useAppSelector(selectPokemonDetails);
    const pokemonName = name !== '' ? capitalizeFirstLetter(name) : '';
    const {habitatName,encounters} = useAppSelector(selectPokemonHabitat);
    const capitalizedHabitatName = habitatName !== '' ? capitalizeFirstLetter(habitatName) : '';
    const status = useAppSelector(selectPokemonHabitatStatus);
    if (status === 'loading') {
        return (
            <h2>Cargando...</h2>
        )
    }
    return (
        <div>
            {pokemonSelected ?
                <Fragment>
                    <Title>Habitat de {pokemonName}</Title>
                    <h4>EL Habitat principal de este pokemon es <strong>{capitalizedHabitatName}</strong></h4>
                    <span>Puedes encontrar este pokemon en las siguientes zonas</span>
                    {encounters.length > 0 ?
                        <Fragment>
                            {
                                encounters.map((encounter, index) => {
                                    return (
                                        <h4 key={index}><strong>Zona
                                            #{index + 1}: </strong>{replaceHyphenWithSpace(encounter)}</h4>
                                    )
                                })
                            }
                        </Fragment>
                        :
                        <h4><strong>Este pokemon no posee un habitat específico</strong></h4>
                    }
                </Fragment>
                :
                <h2>No se ha seleccionado un pokemon</h2>
            }
        </div>
    );
};

export default PokemonHabitat;