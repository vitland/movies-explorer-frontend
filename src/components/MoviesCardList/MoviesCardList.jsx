import React from 'react';
import MovieCard from '../MoviesCard/MovieCard';
import styles from './MoviesCardList.module.css';

const MoviesCardList = () => {
  return (
    <section className={styles.list}>
      <div className={styles.list__container}>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
      </div>
      <button className={styles.list__button}>Ещё</button>
    </section>
  );
};

export default MoviesCardList;