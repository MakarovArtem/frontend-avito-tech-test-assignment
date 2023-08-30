import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { GameDetailed, GamesList } from '../stateSchema';
import { fetchGames, fetchGameById } from './thunks';

type Param = Record<string, string>

interface GamesState {
    games: GamesList;
    game: GameDetailed | null;
    params: Param;
    loading: boolean;
    error: string | undefined;
}

const initialState: GamesState = {
    games: [],
    game: null,
    params: {},
    loading: false,
    error: '',
};

export const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        addQueryParam: (state, action: PayloadAction<string[]>) => {
            const [ paramKey, paramValue ] = action.payload;
            state.params = { ...state.params, [paramKey]: paramValue };
        },
        removeQueryParam: (state, action: PayloadAction<string>) => {
            const paramKey = action.payload;
            delete state.params[paramKey];
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
