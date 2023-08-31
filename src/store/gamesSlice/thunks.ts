import { createAsyncThunk } from '@reduxjs/toolkit';
import { GameDetailed, GamesList } from '../stateSchema';
import { ReduxState } from '../store';

const URL = 'https://free-to-play-games-database.p.rapidapi.com/api/'; // using rapidapi because of CORS
const KEY = 'bf1f96f513mshc19fca591eba50dp18bba8jsn59b35f4f9014'; // if doesn't work - put your key here (need to sign up for the site 'rapidapicom)
const HOST = 'free-to-play-games-database.p.rapidapi.com';

export const fetchGames = createAsyncThunk<GamesList, string, { state: ReduxState }>(
    'games/fetchGames',
    async function (_, thunkAPI) {
        const params = thunkAPI.getState().games.params;
        const queryString = Object.entries(params).map( param => param.join('=')).join('&');
        const response = await fetch(URL + 'games?' + queryString, {
            headers: {
                'X-RapidAPI-Key': KEY,
                'X-RapidAPI-Host': HOST
            }
        });
        const data = await response.json() as GamesList;
        return data;
    }
);

export const fetchGameById = createAsyncThunk<GameDetailed, string, { state: ReduxState }>(
    'games/fetchGameById',
    async function (id: string) {
        const response = await fetch(URL + 'game?id=' + id, {
            headers: {
                'X-RapidAPI-Key': KEY,
                'X-RapidAPI-Host': HOST
            }
        });
        const data = await response.json() as GameDetailed;
        return data;
    }
);