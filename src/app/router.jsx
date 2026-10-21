
import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '../components/layout/MainLayout.jsx';
import HomePage from '../features/home/pages/HomePage.jsx';
import PlacesPage from '../features/places/pages/PlacesPage.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'places',
                element: <PlacesPage />,
            },
        ],
    },
]);

export default router;
