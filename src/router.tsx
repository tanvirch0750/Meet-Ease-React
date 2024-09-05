import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/error/ErrorPage';
import HomePage from './pages/home/HomePage';
import AboutUsPage from './pages/about-us/AboutUs';
import RoomListPage from './pages/room-list/RoomListPage';
import RoomDetailPage from './pages/room-details/RoomDetails';
import ContactUsPage from './pages/contact-us/ContactUs';
import CheckoutPage from './pages/checkout/CheckoutPage';
import BookingPage from './pages/booking/BookingPage';
import SignupPage from './pages/signup/SignupPage';
import LoginPage from './pages/login/LoginPage';
import Dashboard from './pages/admin/dashboard';
import AppShell from './components/ui/admin/app-shell';
import Rooms from './pages/admin/rooms';
import Settings from './pages/admin/settings';
import SettingsProfile from './pages/admin/settings/profile';
import SettingsAccount from './pages/admin/settings/account';
import PublicRoute from './components/ui/publicRoute';
import PrivateRoute from './components/ui/private-route';
import PrivateRouteAdmin from './components/ui/private-route-admin';
import Catgories from './pages/admin/category';

const router = createBrowserRouter([
  // Auth routes
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/sign-up',
    element: (
      <PublicRoute>
        <SignupPage />
      </PublicRoute>
    ),
  },
  {
    path: '/login',
    element: (
      <PublicRoute>
        {' '}
        <LoginPage />
      </PublicRoute>
    ),
  },
  {
    path: '/about-us',
    element: <AboutUsPage />,
  },

  {
    path: '/rooms',
    element: <RoomListPage />,
  },

  {
    path: '/rooms/:id',
    element: (
      <PrivateRoute>
        <RoomDetailPage />
      </PrivateRoute>
    ),
  },

  {
    path: '/contact-us',
    element: <ContactUsPage />,
  },

  {
    path: '/checkout',
    element: (
      <PrivateRoute>
        <CheckoutPage />
      </PrivateRoute>
    ),
  },

  {
    path: '/booking',
    element: (
      <PrivateRoute>
        <BookingPage />
      </PrivateRoute>
    ),
  },

  {
    path: '/',
    element: (
      <PrivateRouteAdmin>
        <AppShell />
      </PrivateRouteAdmin>
    ),
    children: [
      {
        path: '/admin/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/admin/dashboard/category',
        element: <Catgories />,
      },
      {
        path: '/admin/dashboard/rooms',
        element: <Rooms />,
      },
      {
        path: '/admin/dashboard/settings',
        element: <Settings />,
        children: [
          {
            index: true,
            element: <SettingsProfile />,
          },
          {
            path: 'account',
            element: <SettingsAccount />,
          },
        ],
      },
    ],
  },

  // Fallback 404 route
  { path: '*', Component: ErrorPage },
]);

export default router;
