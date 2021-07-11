import axios from 'axios';

export const obtainPokemonIdFromUrl = (url:string) => {
    const pokemonId = url.split('/');
    return pokemonId[6];
};
export const capitalizeFirstLetter = (characters:string) => {
    return characters[0].toUpperCase() + characters.slice(1);
};

export function getRequestInfo(url:string) {
    const host = process.env.REACT_APP_API_SERVER;

    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
    };
    const apiUrl = `${host}${url}`;
    return {
        apiUrl,
        headers
    }
}

export function baseGetAPIRequest(url:string, params={}) {
    const {apiUrl, headers} = getRequestInfo(url);
    return axios.get(apiUrl, {headers: headers, params: params})
}