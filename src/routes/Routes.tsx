import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { routeGenerator } from '../utils/routeGenerator';
import { AuthPath } from './auth.routes';
import DashboardLayoutBranding from '../components/layout/DashboardLayout';

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
        element: <DashboardLayoutBranding />,
    },
    {
        path: '/',
        element: <App />,
        children: routeGenerator(AuthPath),
    },
]);

export default router;
