import { ReduxState } from '../index';

export const getGames = (state: ReduxState) => state.games.games;
export const getGame = (state: ReduxState) => state.games.game;
export const getLoading = (state: ReduxState) => state.games.loading;
export const getParams = (state: ReduxState) => state.games.params;
