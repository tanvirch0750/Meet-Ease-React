import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/error/ErrorPage';
import HomePage from './pages/home/HomePage';
import AboutUsPage from './pages/about-us/AboutUs';
import RoomListPage from './pages/room-list/RoomListPage';
import RoomDetailPage from './pages/room-details/RoomDetails';
import ContactUsPage from './pages/contact-us/ContactUs';
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
import EditRoom from './pages/admin/rooms/components/edit-room';
import Slots from './pages/admin/slots';
import EditSlot from './pages/admin/slots/components/edit-slot';
import BookingCancelPage from './pages/booking-cancel/BookingCancelPage';
import MyBookingsPage from './pages/my-bookings/MyBookingsPage';
import Bookings from './pages/admin/bookings';
import ProfilePage from './pages/profile/ProfilePage';
import Users from './pages/admin/users';

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

  // {
  //   path: '/checkout',
  //   element: (
  //     <PrivateRoute>
  //       <CheckoutPage />
  //     </PrivateRoute>
  //   ),
  // },

  {
    path: '/booking/:id',
    element: (
      <PrivateRoute>
        <BookingPage />
      </PrivateRoute>
    ),
  },

  {
    path: '/booking/cancel/:transactionId',
    element: (
      <PrivateRoute>
        <BookingCancelPage />
      </PrivateRoute>
    ),
  },

  {
    path: '/my-bookings',
    element: (
      <PrivateRoute>
        <MyBookingsPage />
      </PrivateRoute>
    ),
  },

  {
    path: '/my-profile',
    element: (
      <PrivateRoute>
        <ProfilePage />
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
        path: '/admin/dashboard/rooms/edit/:id',
        element: <EditRoom />,
      },
      {
        path: '/admin/dashboard/slots',
        element: <Slots />,
      },
      {
        path: '/admin/dashboard/slots/edit/:id',
        element: <EditSlot />,
      },
      {
        path: '/admin/dashboard/bookings',
        element: <Bookings />,
      },
      {
        path: '/admin/dashboard/users',
        element: <Users />,
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
