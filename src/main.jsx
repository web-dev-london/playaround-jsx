import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailView from "./pages/detail/DetailView";
import FavoriteView from "./pages/favorite/FavoriteView";
import ErrorView from './pages/error/ErrorView.jsx';
import AboutView from './pages/about/AboutView.jsx';
import GlobalState from './context/GlobalState.jsx';
import HomeView from './card-page/home/HomeView.jsx';
import CardView from './card-page/card/CardView.jsx';
import { Provider } from 'react-redux';
import store from './store/storage.js';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorView />
    },
    {
        path: '/favoriteview',
        element: <FavoriteView />,
        errorElement: <ErrorView />
    },
    {
        path: '/detailview/:id',
        element: <DetailView />,
        errorElement: <ErrorView />
    },
    {
        path: '/about',
        element: <AboutView />,
        errorElement: <ErrorView />
    },
    {
        path: '/',
        element: <HomeView />,
        errorElement: <ErrorView />
    },
    {
        path: '/card',
        element: <CardView />,
    }
])
export default router;

ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        <ChakraProvider>
            <GlobalState>
                <Provider store={store} stabilityCheck="always" identityFunctionCheck="always">
                    <RouterProvider router={router} />
                </Provider>
            </GlobalState>
        </ChakraProvider>
    </React.StrictMode>,
)
