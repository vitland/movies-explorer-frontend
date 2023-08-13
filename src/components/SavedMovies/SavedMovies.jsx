import React from 'react';
import styles from '../Movies/Movies.module.css';

const SavedMovies = ({ children }) => {
  return (
    <main className={styles.movies}>
      {children}
    </main>
  );
};

export default SavedMovies;