import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';
import { reduxStore } from './store';
import { MainPage, GamePage, ErrorPage } from './pages';
import './index.css';

export enum Routes {
    MAIN = '/frontend-avito-tech-test-assignment/',
    GAME = '/frontend-avito-tech-test-assignment/game/:id',
    ERROR = '/frontend-avito-tech-test-assignment/error',
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
    {
        path: Routes.ERROR,
        element: <ErrorPage />,
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
