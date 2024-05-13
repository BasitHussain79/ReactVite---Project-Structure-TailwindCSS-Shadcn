import { useAuth } from 'hooks';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const RequireAuth = () => {
  const { id } = useAuth();
  const location = useLocation();

  if (!id) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default RequireAuth;
