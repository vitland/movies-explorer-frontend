import React, { useEffect, useState } from 'react';
import styles from './Movies.module.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { getAllMovies } from '../../utils/api/MoviesApi';
import Preloader from '../Preloader/Preloader';
import Error from '../Error/Error';
import { movieFilter } from '../../utils/movieFilter';

const Movies = ({ savedMovies }) => {
  const [movieList, setMovieList] = useState(JSON.parse(localStorage.getItem('list')));
  const [renderList, setRenderList] = useState([]);
  const [isShort, setIsShort] = useState(false);
  const [query, setQuery] = useState(JSON.parse(localStorage.getItem('query')));
  const [error, setError] = useState({
    status: false,
    msg: 'Ничего не найдено',
  });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (query) => {
    try {
      setIsLoading(true);
      setError({ ...error, status: false })
      const movies = await getAllMovies(query);
      localStorage.setItem('list', JSON.stringify(movies));
      localStorage.setItem('query', JSON.stringify(query));
      setMovieList(movies);
      setQuery(query)
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setError({
        msg: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
        status: true,
      });
      setIsLoading(false);
    }
  };
  const toggleShorts = () => {
    setIsShort(!isShort);
    localStorage.setItem('isShort', JSON.stringify(isShort));
  };

  useEffect(() => {
    if (movieList) {
      const movies = movieFilter(movieList, isShort, query);
      setRenderList(movies)
      if (movies.length === 0){
        setError({...error,
          status: true,
        });
      }
    }
  }, [query, isShort, movieList]);


  return (
    <main className={styles.movies}>
      <SearchForm handleSubmit={onSubmit} onShortChange={toggleShorts} isChecked={isShort} localQuery={query}/>
      {isLoading && <Preloader/>}
      {error.status && <Error msg={error.msg}/>}
      {(renderList && !error.status) &&
        <MoviesCardList allMovies={renderList} savedMovies={savedMovies} isShort={isShort}/>}
    </main>
  );
};

export default Movies;