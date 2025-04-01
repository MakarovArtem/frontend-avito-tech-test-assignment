import { Middleware } from '@reduxjs/toolkit';
import { Routes } from '../../main';

const BANNED_CATEGORY = 'moba';
const BANNED_SORT_BY = 'popularity';

const redirectFunction = (category?: string, sortBy?: string) => {
    if (category === BANNED_CATEGORY && sortBy === BANNED_SORT_BY) {
      window.location.href = Routes.ERROR;
    }
};

export const paramsWatcher: Middleware = 
  (store) => (next) => (action) => {
    const result = next(action);
    
    if (action.type === 'games/addQueryParam' || action.type === 'games/removeQueryParam') {
        const { category, sortBy } = store.getState().games.params || {};

        if (category !== undefined && sortBy !== undefined) {
          redirectFunction(category, sortBy);
        }
    }
    
    return result;
};
