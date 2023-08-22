import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router';
import { useAuth } from '../contexts/AuthContext';

function ProtectedRoute ({isLoggedIn}) {

  if (!isLoggedIn) {
    return <Navigate to={'/signin'} replace={true}/>;
  }
  return <Outlet/>;
}

export default ProtectedRoute;