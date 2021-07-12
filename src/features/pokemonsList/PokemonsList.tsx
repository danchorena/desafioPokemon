import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {loadPokemonsListAsync, selectPokemons} from './pokemonsListSlice';
import Title from "../Title/Title";
import ActionTable from "../actionTable/ActionTable";
import pokemonsListStyles from './pokemonsList.module.css';
import commonStyles from '../common.module.css';
import {obtainNextAndPreviousApiUrlParameters} from "../utils";

const PokemonsList = () => {
    const {count, next, previous, results} = useAppSelector(selectPokemons);
    let nextParams: string = '';
    let previousParams: string = '';

    if (next !== '' && next !== null) {
        nextParams = obtainNextAndPreviousApiUrlParameters(next);
    }
    if (previous !== '' && previous !== null) {
        previousParams = obtainNextAndPreviousApiUrlParameters(previous);
    }
    const dispatch = useAppDispatch();
    const columns = ["Id", "Nombre"];

    useEffect(() => {
        dispatch(loadPokemonsListAsync(''));
    }, []);

    const handleChangePokemonsListPage = (urlParams: string) => {
        dispatch(loadPokemonsListAsync(urlParams));
    };

    return (
        <div>
            <Title>
                <div className={pokemonsListStyles.titleHolder}>
                    <button type="button"
                            className={commonStyles.genericButton}
                            onClick={() => handleChangePokemonsListPage(previousParams)}
                            disabled={previousParams === ''}>
                        <span>&#8592; Previos</span>
                    </button>
                    Lista de pokemon{count > 0 ? 'es' : ''} - Hay {count} por ahora...
                    <button
                        type="button"
                        className={commonStyles.genericButton}
                        onClick={() => handleChangePokemonsListPage(nextParams)}
                        disabled={nextParams === ''}>
                        <span>Siguientes &#8594;</span>
                    </button>
                </div>
            </Title>
            <ActionTable columns={columns} data={results}/>
        </div>
    )
};

export default PokemonsList;