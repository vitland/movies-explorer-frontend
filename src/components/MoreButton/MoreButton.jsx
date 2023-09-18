import classNames from 'classnames';
import styles from '../MoviesCardList/MoviesCardList.module.css';
import React from 'react';

const MoreButton = ({
  savedMoviesPage,
  currentMovieCount,
  allMovies,
  handleShowMoreMovies,
  width,
}) => {
  if (savedMoviesPage || currentMovieCount >= allMovies.length) {
    return null;
  }
  return (
    <button
      className={classNames(styles.list__button, 'opacity_link')}
      onClick={() => handleShowMoreMovies(width)}
    >
      Ещё
    </button>
  );
};
export default MoreButton;
