import React from 'react';
import styles from './MovieCard.module.css';
import { ReactComponent as Like } from '../../images/likeBtn.svg';
import { ReactComponent as LikeActive } from '../../images/likeBtn_active.svg';
import { ReactComponent as Del } from '../../images/delBtn.svg';
import classNames from 'classnames';
import { timeConversion } from '../../utils/timeConversion';

const MovieCard = ({movie}) => {
  // const LikeBtn = isLiked ? LikeActive : Like;
  const {nameRU, image, duration, trailerLink} = movie
  return (
    <article className={styles.movieCard}>
      <img src={` https://api.nomoreparties.co/${image.url}`} alt={`кадр из фильма${nameRU}`} className={styles.movieCard__img}/>
      <div className={styles.movieCard__infoContainer}>
        <h3 className={styles.movieCard__title}>{nameRU}</h3>
        <button className={classNames(styles.movieCard__like, 'opacity_btn')}>
          {/*{savedMovies ? <Del/> : <LikeBtn/>}*/}
        </button>
      </div>
      <p className={styles.movieCard__length}>{timeConversion(duration)}</p>
    </article>
  );
};

export default MovieCard;