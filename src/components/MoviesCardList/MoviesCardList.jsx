import React from 'react';
import MovieCard from '../MoviesCard/MovieCard';
import styles from './MoviesCardList.module.css';
import classNames from 'classnames';

const MoreBtn = ({savedMovies}) => {
  if(savedMovies){
    return null;
  }
  return (
    <button className={classNames(styles.list__button, 'opacity_link')}>Ещё</button>
  )
}
const MoviesCardList = ({savedMovies}) => {
  return (
    <section className={styles.list}>
      <div className={styles.list__container}>
        <MovieCard savedMovies={savedMovies}/>
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