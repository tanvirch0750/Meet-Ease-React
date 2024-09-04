import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import useAdminAuth from '@/hooks/useAdminAuth';

const PrivateRouteAdmin = ({ children }: { children: ReactNode }) => {
  const isLoggedIn = useAdminAuth();

  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRouteAdmin;
