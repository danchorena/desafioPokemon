import React, {Fragment} from "react";
import {InnerPokemon} from "../pokemonsList/pokemonsListSlice";
import {capitalizeFirstLetter, obtainPokemonIdFromUrl} from "../utils";
import actionTableStyles from './ActionTable.module.css';
import {useAppDispatch} from "../../app/hooks";
import {loadPokemonDetailsAsync} from "../landing/landingSlice";
import {loadPokemonHabitatAsync} from "../pokemonHabitat/pokemonHabitatSlice";
import {loadPokemonCharacteristicsAsync} from "../pokemonCharacteristics/pokemonCharacteristicsSlice";

type Props = {
    columns: string[],
    data: InnerPokemon[]
};

const ActionTable: React.FC<Props> = ({columns, data}: Props) => {
    const dispatch = useAppDispatch();

    const handleLoadPokemonDetails = (pokemonId:string) => {
          dispatch(loadPokemonDetailsAsync(pokemonId));
          dispatch(loadPokemonHabitatAsync(pokemonId));
          dispatch(loadPokemonCharacteristicsAsync(pokemonId));
    };

    return (
        <div className={actionTableStyles.actionTableHolder}>
            <table className={actionTableStyles.actionTable}>
                <thead>
                <tr>
                    {columns ?
                        <Fragment>
                            {
                                columns.map((column, index) => {
                                    return (
                                        <th key={index}>
                                            {column}
                                        </th>
                                    )
                                })
                            }
                            <th>Acciones</th>
                        </Fragment>
                        :
                        <th>Lista vacía</th>
                    }
                </tr>
                </thead>
                <tbody>
                {data ?
                    <Fragment>
                        {data.map((data, index) => {
                            const pokemonId = obtainPokemonIdFromUrl(data.url);
                            const pokemonName = capitalizeFirstLetter(data.name);
                            return (
                                <tr key={index}>
                                    <td>
                                        {pokemonId}
                                    </td>
                                    <td>
                                        {pokemonName}
                                    </td>
                                    <td>
                                        <button type="button" onClick={()=>handleLoadPokemonDetails(pokemonId)}>
                                            Ver detalles
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </Fragment>
                    :
                    <tr>
                        <td>No hay pokemones</td>
                    </tr>
                }
                </tbody>
            </table>
        </div>
    )
};

export default ActionTable;