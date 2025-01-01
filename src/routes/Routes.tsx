import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { routeGenerator } from '../utils/routeGenerator';
import { AuthPath } from './auth.routes';
import AuthRoutes from '../components/layout/AuthRoutes';

const router = createBrowserRouter([
    // {
    //     path: '/',
    //     element: (
    //         <AuthRoutes>
    //             <App />
    //         </AuthRoutes>
    //     ),
    //     children: routeGenerator(AuthPath),
    // },
    {
        path: '/',
        element: <App />,
        children: routeGenerator(AuthPath),
    },
]);

export default router;
