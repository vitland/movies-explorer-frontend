import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import styles from '../Movies/Movies.module.css';

const SavedMovies = ({ children }) => {
  return (
    <section className={styles.movies}>
      {children}
    </section>
  );
};

export default SavedMovies;