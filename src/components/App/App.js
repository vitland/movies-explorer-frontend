import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from '../../pages/LandingPage';
import MoviesPage from '../../pages/MoviesPage';
import SavedMoviesPage from '../../pages/SavedMoviesPage';
import RegisterPage from '../../pages/RegisterPage';
import LoginPage from '../../pages/LoginPage';
import ProfilePage from '../../pages/ProfilePage';
import NotFoundPage from '../../pages/NotFoundPage';
import SharedLayout from '../SharedLayout/SharedLayout';
import ProtectedRoute from '../../HOC/ProtectedRoute';
import { useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { validateToken } from '../../utils/api/MainApi';

function App () {
  const { setUser } = useAuth();

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn')) {
      validateToken().then(({ data: { name, email } }) => {
          setUser({ name, email, isLoggedIn: true});
        },
      );
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<LandingPage/>}/>
          <Route element={<ProtectedRoute isLoggedIn={localStorage.getItem('isLoggedIn')}/>}>
            <Route path="/movies" element={<MoviesPage/>}/>
            <Route path="/saved-movies" element={<SavedMoviesPage/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
          </Route>
        </Route>
        <Route path="/signin" element={<LoginPage/>}/>
        <Route path="/signup" element={<RegisterPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
