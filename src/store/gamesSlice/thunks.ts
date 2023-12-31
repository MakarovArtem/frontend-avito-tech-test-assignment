import { createAsyncThunk } from '@reduxjs/toolkit';
import { ReduxState } from '../store';
import { GameDetailed, GamesList } from '../stateSchema';
import { getGameById, getGamesWithParams } from '../../utils/getGame';

const GAME_LIFETIME = 5 * 60 * 1000;

export const fetchGames = createAsyncThunk<GamesList, null, { state: ReduxState }>(
    'games/fetchGames',
    async function (_, thunkAPI) {
        const params = thunkAPI.getState().games.params;
        const queryString = Object.entries(params).map( param => param.join('=')).join('&');
        const games = await getGamesWithParams(queryString);
        return games;
    }
);

export const fetchGameById = createAsyncThunk<GameDetailed, number, { state: ReduxState }>(
    'games/fetchGameById',
    async function (id, { getState }) {
        const state = getState();
        const currentGame = state.games.gamesDetailed.find( game => game.id == id);
        if (currentGame) {
            const isLifetimeExpired = Date.now() - currentGame.requestTime > GAME_LIFETIME ? true : false;
            if (!isLifetimeExpired) {
                return currentGame;
            }
        }
        const game = await getGameById(id);
        const updatedGame = { ...game, requestTime: Date.now() };
        return updatedGame;
    }
);