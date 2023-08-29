import { createAsyncThunk } from '@reduxjs/toolkit';
import { GamesList } from '../stateSchema';
import { ReduxState } from '../store';

const URL = 'https://www.freetogame.com/api/games?';

// https://www.freetogame.com/api/games?platform=browser&category=mmorpg&sort-by=release-date

export const fetchGamesWithQueryParams = createAsyncThunk<GamesList, string, { state: ReduxState }>(
    'games/fetchGamesWithQueryParams',
    async (_, thunkAPI) => {
        try {
            const queryParams = thunkAPI.getState().games.params.join('&');
            const response = await fetch(URL + queryParams);
            const data = await response.json();
            return (data as GamesList);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data); //This carries the response you are receiving from the server
        }
    }
);
