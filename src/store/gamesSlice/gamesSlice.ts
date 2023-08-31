import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { GameDetailed, GamesList, SessionState } from '../stateSchema';
import { fetchGames, fetchGameById } from './thunks';

export type Param = Record<string, string>

export interface GamesState {
    games: GamesList;
    game: GameDetailed;
    params: Param;
    loading: boolean;
    error: string | undefined;
}

const initialState: GamesState = {
    games: [],
    game: {
        id: 0,
        title: '',
        thumbnail: '',
        status: '',
        short_description: '',
        description: '',
        game_url: '',
        genre: '',
        platform: '',
        publisher: '',
        developer: '',
        release_date: '',
        freetogame_profile_url: '',
        minimum_system_requirements: {
            os: '',
            processor: '',
            memory: '',
            graphics: '',
            storage: ''
        },
        screenshots: [
            {
                id: 0,
                image: ''
            },
            {
                id: 0,
                image: ''
            },
            {
                id: 0,
                image: ''
            }
        ]
    },
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
        },
        addGameToSessionStorage: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            const game = state.game;
            const currentTime = Date.now();
            const sessionState: SessionState = {
                requestTime: currentTime,
                data: game
            };
            sessionStorage.setItem(id, JSON.stringify(sessionState));
        },
        extractGameFromSessionStorage: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            state.game = JSON.parse(sessionStorage.getItem(id));
        },
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
