import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { GameDetailed, GamesList } from '../stateSchema';
import { fetchGames, fetchGameById } from './thunks';

interface GamesState {
    games: GamesList;
    game: GameDetailed | null;
    params: string[];
    loading: boolean;
    error: string | undefined;
}

const initialState: GamesState = {
    games: [],
    game: null,
    params: ['platform=browser'],
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
            .addCase(fetchGames.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchGames.fulfilled, (state, action: PayloadAction<GamesList>) => {
                state.loading = false;
                state.games = action.payload;
            })
            .addCase(fetchGames.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchGameById.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchGameById.fulfilled, (state, action: PayloadAction<GameDetailed>) => {
                state.loading = false;
                state.game = action.payload;
            })
            .addCase(fetchGameById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { actions: gamesActions } = gamesSlice;
export const { reducer: gamesReducer } = gamesSlice;
