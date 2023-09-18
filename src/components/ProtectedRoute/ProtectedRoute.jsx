import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router';

function ProtectedRoute({ isLoggedIn }) {
  if (!isLoggedIn) {
    return <Navigate to={'/'} replace={true} />;
  }
  return <Outlet />;
}

export default ProtectedRoute;
