import { RouterProvider } from 'react-router-dom';

import router from './router';
import useAuthCheck from './hooks/useAuthCheck';
import Loader from './components/ui/loader';

function App() {
  const authCheck = useAuthCheck();

  return !authCheck ? <Loader /> : <RouterProvider router={router} />;
}

export default App;
