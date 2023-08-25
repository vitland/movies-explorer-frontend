import React, { useEffect, useState } from 'react';
import styles from './Movies.module.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import getAllMovies from '../../utils/api/MoviesApi';
import Preloader from '../Preloader/Preloader';
import Error from '../Error/Error';
import movieFilter from '../../utils/movieFilter';
import { addMovie, getMovies, removeMovie } from '../../utils/api/MainApi';

const Movies = ({ savedMoviesPage }) => {
  const [movieList, setMovieList] = useState(null);
  const [savedMovieList, setSavedMovieList] = useState(JSON.parse(localStorage.getItem('savedMovies')));
  const [renderList, setRenderList] = useState(null);
  const [isShort, setIsShort] = useState(false);
  const [query, setQuery] = useState('');
  const [error, setError] = useState({
    status: false,
    msg: 'Ничего не найдено',
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('savedMovies'))) {
      getMovies()
        .then((savedMovies) => {
          setSavedMovieList(savedMovies);
          localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
        })
        .catch((err) => console.log(err));
    }
    localStorage.setItem('savedMovies', JSON.stringify(savedMovieList));
  }, [savedMovieList]);

  useEffect(() => {
    if (!savedMoviesPage) {
      setMovieList(JSON.parse(localStorage.getItem('allMovies')));
      setQuery(JSON.parse(localStorage.getItem('query')) || '');
      setIsShort(JSON.parse(localStorage.getItem('isShort')));
    }
    setSavedMovieList(JSON.parse(localStorage.getItem('savedMovies')));
  }, []);

  /*Рендер сохраненных фильмов*/
  useEffect(() => {
    if (savedMoviesPage && savedMovieList) {
      setError({ ...error, status: false });
      const filteredMovies = movieFilter(savedMovieList, isShort, query);
      setRenderList(() => filteredMovies);
      if (filteredMovies.length === 0) {
        setError({
          ...error,
          status: true,
        });
      }
      return;
    }

    /*Рендер фильмов*/
    if (movieList) {
      localStorage.setItem('isShort', JSON.stringify(isShort));
      setError({ ...error, status: false });
      let filteredMovies = movieFilter(movieList, isShort, query);
      if (savedMovieList) {
        filteredMovies = filteredMovies.map((movie) => {
          //добавляет свойство isLiked
          return savedMovieList.find((sMovie) => sMovie.id === movie.id)
            ? {
                ...movie,
                isLiked: true,
              }
            : { ...movie, isLiked: false };
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
    getAllMovies()
      .then((movies) => {
        localStorage.setItem('allMovies', JSON.stringify(movies));
        localStorage.setItem('query', JSON.stringify(query));
        localStorage.removeItem('currentMovieCount');
        setMovieList(movies);
        setQuery(query);
        setIsLoading(false);
      })
      .catch(() => {
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
    setIsShort(() => !isShort);
  };
  const toggleLike = ({ movie }) => {
    // удаляет, если фильм уже сохранен
    const savedMovie = savedMovieList.find((sMovie) => sMovie.id === movie.id)
    if (savedMovie) {
      return handleRemove(savedMovie._id);
    }
    addMovie({
      ...movie,
      thumbnail: movie.image.url,
      image: { url: movie.image.url },
    })
      .then((savedMovie) => {
        setSavedMovieList((prev) => [...prev, savedMovie]);
      })
      .catch((err) => console.log(err));
  };

  const handleRemove = (movieId) => {
    removeMovie(movieId)
      .then(({ data }) => {
        setSavedMovieList((prev) => prev.filter((movie) => movie.id !== data.id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className={styles.movies}>
      <SearchForm
        handleSubmit={handelSubmit}
        onShortChange={toggleShorts}
        handleChange={handleChange}
        isChecked={isShort}
        query={query}
      />

      {isLoading ? (
        <Preloader />
      ) : (
        renderList &&
        !error.status && (
          <MoviesCardList
            allMovies={renderList}
            savedMoviesPage={savedMoviesPage}
            isShort={isShort}
            onLike={toggleLike}
            onRemove={handleRemove}
          />
        )
      )}

      {error.status && <Error msg={error.msg} />}
    </main>
  );
};

export default Movies;
