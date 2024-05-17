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
// import HomeView from "./pages/home/HomeView";


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
    }
])
export default router;

ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        <ChakraProvider>
            <GlobalState>
                <RouterProvider router={router} />
            </GlobalState>
        </ChakraProvider>
    </React.StrictMode>,
)
