import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppProvider, type Navigation } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';

const NAVIGATION: Navigation = [
    {
        segment: 'dashboard',
        title: 'Dashboard',
        icon: <DashboardIcon />,
    },
    {
        segment: 'orders',
        title: 'Orders',
        icon: <ShoppingCartIcon />,
    },
];

export default function DashboardLayoutBranding() {
    const router = useDemoRouter('/dashboard');

    return (
        // preview-start
        <AppProvider
            navigation={NAVIGATION}
            branding={{
                logo: (
                    <img src="https://mui.com/static/logo.png" alt="MUI logo" />
                ),
                title: 'MUI',
                homeUrl: '/toolpad/core/introduction',
            }}
            router={router}
        >
            <DashboardLayout>
                {/* <DemoPageContent pathname={router.pathname} /> */}
                <div className="text-black">hello</div>
            </DashboardLayout>
        </AppProvider>
        // preview-end
    );
}
