import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/MainPage';
import './index.css';
import GamePage from './pages/GamePage';
import ErrorPage from './pages/ErrorPage';
import { Provider as StoreProvider } from 'react-redux';
import { reduxStore } from './redux/store';

export enum Routes {
    MAIN = '/',
    GAME = '/game/:id',
}

const router = createBrowserRouter([
    {
        path: Routes.MAIN,
        element: <MainPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: Routes.GAME,
        element: <GamePage />,
        errorElement: <ErrorPage />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <StoreProvider store={reduxStore}>
            <RouterProvider router={router} />
        </StoreProvider>
    </React.StrictMode>,
);
