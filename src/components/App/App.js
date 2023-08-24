import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from '../../pages/LandingPage';
import MoviesPage from '../../pages/MoviesPage';
import SavedMoviesPage from '../../pages/SavedMoviesPage';
import RegisterPage from '../../pages/RegisterPage';
import LoginPage from '../../pages/LoginPage';
import ProfilePage from '../../pages/ProfilePage';
import NotFoundPage from '../../pages/NotFoundPage';
import SharedLayout from '../SharedLayout/SharedLayout';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { getUser } from '../../utils/api/MainApi';
import UnprotectedRoute from '../UnprotectedRoute/UnprotectedRoute';

function App() {
  const { setUser } = useAuth();

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setUser(JSON.parse(localStorage.getItem('user')));
    }
  }, [setUser]);

  useEffect(() => {
    if (!localStorage.getItem('user')) {
      getUser()
        .then((user) => {
          setUser({ ...user, isLoggedIn: true });
          localStorage.setItem('user', JSON.stringify({ ...user, isLoggedIn: true }));
        })
        .catch(() => {
          setUser({});
          localStorage.clear();
        });
    }
  }, [setUser]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<LandingPage />} />
          <Route element={<ProtectedRoute isLoggedIn={localStorage.getItem('user')} />}>
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/saved-movies" element={<SavedMoviesPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
        </Route>
        <Route element={<UnprotectedRoute isLoggedIn={localStorage.getItem('user')} />}>
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
