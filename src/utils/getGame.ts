import { GameDetailed, GamesList } from '../store';

const URL = 'https://free-to-play-games-database.p.rapidapi.com/api/'; // using rapidapi because of CORS
const KEY = 'bf1f96f513mshc19fca591eba50dp18bba8jsn59b35f4f9014'; // if doesn't work - put your key here (need to sign up for the site 'rapidapicom)
const HOST = 'free-to-play-games-database.p.rapidapi.com';

export const getGameById = async (id: number) => {
    const response = await fetch(URL + 'game?id=' + id, {
        headers: {
            'X-RapidAPI-Key': KEY,
            'X-RapidAPI-Host': HOST
        }
    });
    const gameDetailed = await response.json() as GameDetailed;
    console.log('gameDetailed from getGameById: ', gameDetailed)
    return gameDetailed;
};

export const getGamesWithParams = async (params: string) => {
    const response = await fetch(URL + 'games?' + params, {
        headers: {
            'X-RapidAPI-Key': KEY,
            'X-RapidAPI-Host': HOST
        }
    });
    const gamesList = await response.json() as GamesList;
    return gamesList;
};