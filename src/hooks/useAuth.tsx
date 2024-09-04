import { useAppSelector } from '../redux/hooks';

const useAuth = () => {
  const auth = useAppSelector((state) => state.auth);

  if (auth?.accessToken && auth?.email) {
    return true;
  } else {
    return false;
  }
};

export default useAuth;
