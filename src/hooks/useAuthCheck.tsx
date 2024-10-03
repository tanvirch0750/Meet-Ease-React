import { useEffect, useState } from 'react';
import { userLoggedIn } from '../redux/features/auth/authSlice';
import { useAppDispatch } from '../redux/hooks';

const useAuthCheck = () => {
  const dispatch = useAppDispatch();
  const [authCheck, setAuthCheck] = useState(false);

  useEffect(() => {
    const localAuth = localStorage?.getItem('auth');

    if (localAuth) {
      const auth = JSON.parse(localAuth);

      if (auth?.accessToken && auth?.email) {
        dispatch(
          userLoggedIn({
            accessToken: auth?.accessToken,
            email: auth?.email,
            role: auth?.role,
            name: auth?.name,
            image: auth?.image,
          })
        );
      }
    }
    setAuthCheck(true);
  }, [dispatch]);

  return authCheck;
};

export default useAuthCheck;
