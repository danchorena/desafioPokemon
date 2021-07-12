import React from 'react';
import Title from "../Title/Title";
import landingStyles from './Landing.module.css';
import PokemonsList from '../pokemonsList/PokemonsList';
import PokemonStats from "../pokemonStats/PokemonStats";
import PokemonAbilities from "../pokemonAbilities/PokemonAbilities";
import PokemonTypes from "../pokemonTypes/PokemonType";
import PokemonHabitat from "../pokemonHabitat/PokemonHabitat";
import PokemonCharacteristics from '../pokemonCharacteristics/PokemonCharacteristics';

const Landing = () => {
    return (
        <div className={landingStyles.container}>
            <nav>
                <Title>El (no oficial) Pocket Master</Title>
            </nav>
            <main>
                <PokemonsList/>
            </main>
            <div className={landingStyles.abilities}>
                <PokemonAbilities/>
            </div>
            <div className={landingStyles.stats}>
                <PokemonStats/>
            </div>
            <div className={landingStyles.types}>
                <PokemonTypes/>
            </div>
            <div className={landingStyles.specie}>
            <PokemonCharacteristics/>
            </div>
            <footer>
                <PokemonHabitat/>
            </footer>
        </div>
    )
};

export default Landing;