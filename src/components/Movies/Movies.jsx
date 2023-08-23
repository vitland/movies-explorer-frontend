import React, { useEffect, useState } from 'react';
import styles from './Movies.module.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { getAllMovies } from '../../utils/api/MoviesApi';
import Preloader from '../Preloader/Preloader';
import Error from '../Error/Error';
import { movieFilter } from '../../utils/movieFilter';
import { addMovie, getMovies, removeMovie } from '../../utils/api/MainApi';

const Movies = ({ savedMoviesPage }) => {
  const [movieList, setMovieList] = useState(null);
  const [savedMovieList, setSavedMovieList] = useState(null);
  const [renderList, setRenderList] = useState(null);
  const [isShort, setIsShort] = useState(null);
  const [query, setQuery] = useState('');
  const [error, setError] = useState({
    status: false,
    msg: 'Ничего не найдено',
  });
  const [isLoading, setIsLoading] = useState(false);
  /*алгоритм
  * первый поиск фильмы записываются с локалстор
  * лайк фильм записывается в базу
  * обноаление страницы с фильмами - фильмы из локал сравниваются с список сохранения
  *
  * */

  useEffect(() => {
    if (!savedMoviesPage) {
      setMovieList(JSON.parse(localStorage.getItem('allMovies')));
      setQuery(JSON.parse(localStorage.getItem('query')));
      setIsShort(JSON.parse(localStorage.getItem('isShort')));
      getMovies().then((savedMovies) => {
        setSavedMovieList(savedMovies);
      });
      return
    }
    getMovies().then((savedMovies) => {
      setSavedMovieList(savedMovies);
    });

  }, []);

  /*Рендер сохраненных фильмов*/
  useEffect(() => {
    if (savedMoviesPage && savedMovieList){
      setError({ ...error, status: false });
      const filteredMovies = movieFilter(savedMovieList, isShort, query)
      setRenderList(()=>filteredMovies);
      if (filteredMovies.length === 0) {
        setError({
          ...error,
          status: true,
        });
      }
      return
    }
    /*Рендер фильмов*/
    localStorage.setItem('isShort', JSON.stringify(isShort));
    if (movieList) {
      setError({ ...error, status: false });
      let filteredMovies = movieFilter(movieList, isShort, query)
      if (savedMovieList) {
        filteredMovies = filteredMovies.map(movie => {
          //добавляет свойство isLiked
          return savedMovieList.find((sMovie => sMovie.id === movie.id)) ? {
            ...movie,
            isLiked: true
          } : { ...movie, isLiked: false }
        });
      }
      setRenderList(filteredMovies);
      if (filteredMovies.length === 0) {
        setError({
          ...error,
          status: true,
        });
      }
    }
  }, [isShort, movieList, savedMovieList]);

  const handelSubmit = (query) => {
    setIsLoading(true);
    setError({ ...error, status: false });
    getAllMovies().then((movies) => {
      localStorage.setItem('allMovies', JSON.stringify(movies));
      localStorage.setItem('query', JSON.stringify(query));
      localStorage.removeItem('currentMovieCount');
      setMovieList(movies);
      setQuery(query);
      setIsLoading(false);
    }).catch((e) => {
      setError({
        msg: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
        status: true,
      });
      setIsLoading(false);
    });
  };
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const toggleShorts = () => {
    setIsShort(!isShort);
    localStorage.setItem('isShort', JSON.stringify(isShort));
  };
  const toggleLike = ({ movie }) => {
    // удаляет, если фильм уже сохранен
    if (savedMovieList.find((sMovie) => sMovie.id===movie.id)) {
     return handleRemove(movie.id)
    }
    addMovie({ ...movie, thumbnail: movie.image.url, image: {url:movie.image.url} })
    .then((savedMovie)=> setSavedMovieList((prev)=> [...prev, savedMovie] ))
    .catch(e => console.log(e));
  };

  const handleRemove = (movieId) => {
    removeMovie(movieId).then(({ data }) => {
      setSavedMovieList((prev)=> prev.filter((movie)=> movie.id !==data.id))
    })
    .catch(e => console.log(e));
  };

  return (
    <main className={styles.movies}>
      <SearchForm handleSubmit={handelSubmit} onShortChange={toggleShorts} handleChange={handleChange} isChecked={isShort} query={query}/>

      {isLoading ? <Preloader/> : (
        (renderList && !error.status) &&
        <MoviesCardList allMovies={renderList} savedMoviesPage={savedMoviesPage} isShort={isShort} onLike={toggleLike} onRemove={handleRemove}/> )}

      {error.status && <Error msg={error.msg}/>}
    </main>
  );
};

export default Movies;