import Main from '../Main/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../../pages/LandingPage';
import Movies from '../Movies/Movies';
import MoviesPage from '../../pages/MoviesPage';
import SavedMoviesPage from '../../pages/SavedMoviesPage';
import RegisterPage from '../../pages/RegisterPage';
import LoginPage from '../../pages/LoginPage';
import ProfilePage from '../../pages/ProfilePage';
function App() {
  return (
<BrowserRouter>
  <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/movies' element={<MoviesPage/>}/>
    <Route path='/saved-movies' element={<SavedMoviesPage/>}/>
    <Route path='/profile' element={<ProfilePage/>}/>
    <Route path='/signin' element={<LoginPage/>}/>
    <Route path='/signup' element={<RegisterPage/>}/>
  </Routes>
</BrowserRouter>
  );
}

export default App;
