import { RouterProvider } from 'react-router-dom';

import router from './router';
import useAuthCheck from './hooks/useAuthCheck';
import Loader from './components/ui/loader';
import ScrollToTopButton from './components/scroll-to-top-button/scrollToTopButton';

function App() {
  const authCheck = useAuthCheck();

  return !authCheck ? (
    <Loader />
  ) : (
    <>
      <RouterProvider router={router} />
      <ScrollToTopButton />
    </>
  );
}

export default App;
