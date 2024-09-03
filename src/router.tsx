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

const router = createBrowserRouter([
  // Auth routes
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/sign-up',
    element: <SignupPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
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
    element: <RoomDetailPage />,
  },

  {
    path: '/contact-us',
    element: <ContactUsPage />,
  },

  {
    path: '/checkout',
    element: <CheckoutPage />,
  },

  {
    path: '/booking',
    element: <BookingPage />,
  },

  // Fallback 404 route
  { path: '*', Component: ErrorPage },
]);

export default router;
