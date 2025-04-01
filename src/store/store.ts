import { configureStore, type ThunkAction, type Action } from '@reduxjs/toolkit';
import { useSelector as useReduxSelector,
    useDispatch as useReduxDispatch,
    type TypedUseSelectorHook, } from 'react-redux';
import { gamesReducer } from './gamesSlice/gamesSlice';
import { paramsWatcher } from './middlewares/paramsWatcher';

export const reduxStore = configureStore({
    reducer: { games: gamesReducer },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(paramsWatcher),
});

export const useDispatch = () => useReduxDispatch<ReduxDispatch>();
export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector;

export type ReduxStore = typeof reduxStore;
export type ReduxState = ReturnType<typeof reduxStore.getState>;
export type ReduxDispatch = typeof reduxStore.dispatch;
export type ReduxThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  Action
>;