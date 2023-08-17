import React, { useEffect, useState } from 'react';
import MovieCard from '../MoviesCard/MovieCard';
import styles from './MoviesCardList.module.css';
import classNames from 'classnames';
import useWindowWidth from '../../hooks/useWindowWidth';
import { getMovieCount, initialMovies, moviesToAdd } from '../../utils/movieCount';

const MoviesCardList = ({ allMovies, error, savedMovies }) => {
  const [currentMovieCount, setCurrentMovieCount] = useState(0);
  const width = useWindowWidth();
  const handleShowMoreMovies = (width) => {
    getMovieCount(width)
    setCurrentMovieCount(()=> currentMovieCount+moviesToAdd)
  };

  const MoreBtn = ({ savedMovies }) => {
    if (savedMovies || (currentMovieCount >= allMovies.length)) {
      return null;
    }
    return (
      <button className={classNames(styles.list__button, 'opacity_link')}
              onClick={() => handleShowMoreMovies(width)}>Ещё</button>
    );
  };
  useEffect(() => {
    getMovieCount(width)
    setCurrentMovieCount(()=> initialMovies)
  }, []);

  useEffect(() => {
    getMovieCount(width)
  }, [width, allMovies]);

  return (
    <section className={styles.list}>
      <div className={styles.list__container}>
        {allMovies.slice(0, currentMovieCount).map((movie) => (<MovieCard movie={movie} key={movie.id}/>))}
      </div>
      {(!error && allMovies.length !== 0) && <MoreBtn savedMovies={savedMovies}/>}
    </section>
  );
};

export default MoviesCardList;