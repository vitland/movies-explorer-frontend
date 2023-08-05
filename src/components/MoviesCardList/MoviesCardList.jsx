import React from 'react';
import MovieCard from '../MoviesCard/MovieCard';
import styles from './MoviesCardList.module.css';

const MoreBtn = ({savedMovies}) => {
  if(savedMovies){
    return null;
  }
  return  <button className={styles.list__button}>Ещё</button>
}
const MoviesCardList = ({savedMovies}) => {
  return (
    <section className={styles.list}>
      <div className={styles.list__container}>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
      </div>
      <MoreBtn savedMovies={savedMovies}/>
    </section>
  );
};

export default MoviesCardList;