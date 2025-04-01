import { Middleware } from '@reduxjs/toolkit';
import { Routes } from '../../main';

const BANNED_CATEGORY = 'moba';
const BANNED_SORT_BY = 'popularity';

export const createParamsWatcher = (navigate: (path: string) => void): Middleware => {
  return (store) => (next) => (action) => {
    const result = next(action);
    
    if (action.type === 'games/addQueryParam' || action.type === 'games/removeQueryParam') {
      const { category, sortBy } = store.getState().games.params || {};
      
      if (category === BANNED_CATEGORY && sortBy === BANNED_SORT_BY) {
        navigate(Routes.ERROR); // Мягкий редирект через React Router
      }
    }
    
    return result;
  };
};