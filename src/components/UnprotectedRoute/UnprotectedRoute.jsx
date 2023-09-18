import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router';

function UnprotectedRoute({ isLoggedIn }) {
  if (isLoggedIn) {
    return <Navigate to={'/'} replace={true} />;
  }
  return <Outlet />;
}

export default UnprotectedRoute;
