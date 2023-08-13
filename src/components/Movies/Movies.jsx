import React from 'react';
import styles from './Movies.module.css';


const Movies = ({children}) => {
  return (
    <main className={styles.movies}>
      {children}
    </main>
  );
};

export default Movies;