import { RouterProvider } from 'react-router-dom';

import router from './router';
import useAuthCheck from './hooks/useAuthCheck';
import Loader from './components/ui/loader';
import ScrollToTopButton from './components/scroll-to-top-button/scrollToTopButton';
import { Suspense } from 'react';

function App() {
  const authCheck = useAuthCheck();

  return !authCheck ? (
    <Loader />
  ) : (
    <>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>

      <ScrollToTopButton />
    </>
  );
}

export default App;
