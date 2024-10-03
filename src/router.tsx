/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from 'react-router-dom';

// import BookingPage from './pages/booking/BookingPage';
import AppShell from './components/ui/admin/app-shell';
import PublicRoute from './components/ui/publicRoute';
import PrivateRoute from './components/ui/private-route';
import PrivateRouteAdmin from './components/ui/private-route-admin';

import { lazy } from 'react';
import PrivacyPage from './pages/privacy-terms/PrivacyPage';
import CareerPage from './pages/career/CareersPage';
import BusinessPage from './pages/for-business/BusinessPage';

// Lazy load your pages
const HomePage = lazy(() => import('./pages/home/HomePage'));
const AboutUsPage = lazy(() => import('./pages/about-us/AboutUs'));
const RoomListPage = lazy(() => import('./pages/room-list/RoomListPage'));
const RoomDetailPage = lazy(() => import('./pages/room-details/RoomDetails'));
const ContactUsPage = lazy(() => import('./pages/contact-us/ContactUs'));
const BookingPage = lazy(() => import('./pages/booking/BookingPage'));
const SignupPage = lazy(() => import('./pages/signup/SignupPage'));
const LoginPage = lazy(() => import('./pages/login/LoginPage'));
const Dashboard = lazy(() => import('./pages/admin/dashboard'));
const Rooms = lazy(() => import('./pages/admin/rooms'));
const Profile = lazy(() => import('./pages/admin/profile'));
const Catgories = lazy(() => import('./pages/admin/category'));
const EditRoom = lazy(() => import('./pages/admin/rooms/components/edit-room'));
const Slots = lazy(() => import('./pages/admin/slots'));
const EditSlot = lazy(() => import('./pages/admin/slots/components/edit-slot'));
const BookingCancelPage = lazy(
  () => import('./pages/booking-cancel/BookingCancelPage')
);
const MyBookingsPage = lazy(() => import('./pages/my-bookings/MyBookingsPage'));
const Bookings = lazy(() => import('./pages/admin/bookings'));
const ProfilePage = lazy(() => import('./pages/profile/ProfilePage'));
const Users = lazy(() => import('./pages/admin/users'));
const ErrorPage = lazy(() => import('./pages/error/ErrorPage'));

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
    path: '/privacy-policy',
    element: <PrivacyPage />,
  },
  {
    path: '/careers',
    element: <CareerPage />,
  },
  {
    path: '/for-business',
    element: <BusinessPage />,
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
        path: '/admin/dashboard/profile',
        element: <Profile />,
      },
    ],
  },

  // Fallback 404 route
  { path: '*', Component: ErrorPage },
]);

export default router;
