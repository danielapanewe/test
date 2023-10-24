import Home from './pages/Home';
import Contact from './pages/Contact';
import AllProducts from './pages/AllProducts';
import DetailCommande from './pages/DetailCommande';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/Contact',
        element: <Contact />,
    },
    {
        path: '/NosProduits',
        element: <AllProducts />,
    },
    {
        path: '/MaCommande',
        element: <DetailCommande />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
