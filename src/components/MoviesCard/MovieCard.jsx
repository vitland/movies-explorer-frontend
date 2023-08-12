import React from 'react';
import styles from './MovieCard.module.css';
import { ReactComponent as Like } from '../../images/likeBtn.svg';
import { ReactComponent as LikeActive } from '../../images/likeBtn_active.svg';
import { ReactComponent as Del } from '../../images/delBtn.svg';
import classNames from 'classnames';

const MovieCard = ({ savedMovies, isLiked }) => {
  const LikeBtn = isLiked ? LikeActive : Like;
  return (
    <article className={styles.movieCard}>
      <img src={require('../../images/moviePic.png')} alt="кадр из фильма" className=""/>
      <div className={styles.movieCard__infoContainer}>
        <h3 className={styles.movieCard__title}>33 слова о дизайне</h3>
        <button className={classNames(styles.movieCard__like, 'opacity_btn')}>
          {savedMovies ? <Del/> : <LikeBtn/>}
        </button>
      </div>
      <p className={styles.movieCard__length}>1ч 42м</p>
    </article>
  );
};

export default MovieCard;