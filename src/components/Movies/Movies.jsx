import React from 'react';
import styles from './Movies.module.css';


const Movies = ({children}) => {
  return (
    <section className={styles.movies}>
      {children}
    </section>
  );
};

export default Movies;