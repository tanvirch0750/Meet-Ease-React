import { useAppSelector } from '../redux/hooks';

const useAdminAuth = () => {
  const auth = useAppSelector((state) => state.auth);

  if (auth?.accessToken && auth?.email && auth?.role === 'admin') {
    return true;
  } else {
    return false;
  }
};

export default useAdminAuth;
