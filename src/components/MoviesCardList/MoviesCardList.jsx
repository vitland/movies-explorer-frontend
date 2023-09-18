import React, { useEffect, useState } from 'react';
import MovieCard from '../MoviesCard/MovieCard';
import MoreButton from '../MoreButton/MoreButton';
import styles from './MoviesCardList.module.css';
import useWindowWidth from '../../hooks/useWindowWidth';
import { getMovieCount, initialMovies, moviesToAdd } from '../../utils/movieCount';

const MoviesCardList = ({ allMovies, error, savedMoviesPage, onLike, onRemove }) => {
  const [currentMovieCount, setCurrentMovieCount] = useState(
    JSON.parse(localStorage.getItem('currentMovieCount')),
  );
  const width = useWindowWidth();
  const handleShowMoreMovies = (width) => {
    getMovieCount(width);
    setCurrentMovieCount(() => currentMovieCount + moviesToAdd);
    localStorage.setItem('currentMovieCount', JSON.stringify(currentMovieCount + moviesToAdd));
  };

  useEffect(() => {
    getMovieCount(width);
    if (!localStorage.getItem('currentMovieCount')) setCurrentMovieCount(() => initialMovies);
  }, []);

  useEffect(() => {
    getMovieCount(width);
  }, [width, allMovies]);

  return (
    <section className={styles.list}>
      <div className={styles.list__container}>
        {allMovies.slice(0, currentMovieCount).map((movie) => (
          <MovieCard
            movie={movie}
            key={movie.id}
            onLike={onLike}
            onRemove={onRemove}
            savedMoviesPage={savedMoviesPage}
          />
        ))}
      </div>
      {!error && allMovies.length !== 0 && (
        <MoreButton
          savedMoviesPage={savedMoviesPage}
          width={width}
          currentMovieCount={currentMovieCount}
          allMovies={allMovies}
          handleShowMoreMovies={handleShowMoreMovies}
        />
      )}
    </section>
  );
};

export default MoviesCardList;
