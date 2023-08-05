import Main from '../Main/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../../pages/LandingPage';
import Movies from '../Movies/Movies';
import MoviesPage from '../../pages/MoviesPage';
import SavedMoviesPage from '../../pages/SavedMoviesPage';
function App() {
  return (
<BrowserRouter>
  <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/movies' element={<MoviesPage/>}/>
    <Route path='/saved-movies' element={<SavedMoviesPage/>}/>
  </Routes>
</BrowserRouter>
  );
}

export default App;
