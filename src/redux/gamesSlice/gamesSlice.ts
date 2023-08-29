import { createSlice, SerializedError, type PayloadAction } from '@reduxjs/toolkit';
import { GamesList } from '../stateSchema';
import { fetchGamesWithQueryParams } from './thunks';

interface GamesState {
    games: GamesList;
    params: string[];
    loading: boolean;
    error: string;
}

const initialState: GamesState = {
    games: [],
    params: [],
    loading: false,
    error: '',
};

export const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        setQueryParams: (state, action: PayloadAction<string>) => {
            const newParam = action.payload;
            const newParamKey = newParam.split('=')[0];
            state.params = state.params.map( oldParam => {
                return oldParam.startsWith(newParamKey) ? newParam : oldParam;
            });
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGamesWithQueryParams.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchGamesWithQueryParams.fulfilled, (state, action: PayloadAction<GamesList>) => {
                state.loading = false;
                state.games = action.payload;
            })
            .addCase(fetchGamesWithQueryParams.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    },
});


export const { actions: gamesActions } = gamesSlice;
export const { reducer: gamesReducer } = gamesSlice;