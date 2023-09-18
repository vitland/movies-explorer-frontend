import React from 'react';
import styles from './MovieCard.module.css';
import { ReactComponent as Like } from '../../images/likeBtn.svg';
import { ReactComponent as LikeActive } from '../../images/likeBtn_active.svg';
import { ReactComponent as Del } from '../../images/delBtn.svg';
import classNames from 'classnames';
import timeConversion from '../../utils/timeConversion';

const MovieCard = ({ movie, onLike, onRemove, savedMoviesPage }) => {
  const LikeBtn = movie.isLiked ? LikeActive : Like;
  const { nameRU, image, duration, trailerLink } = movie;
  return (
    <article className={styles.movieCard}>
      <a href={trailerLink} target={'_blank'} rel={'noreferrer'}>
        <img
          src={` https://api.nomoreparties.co/${image?.url}`}
          alt={`кадр из фильма${nameRU}`}
          className={styles.movieCard__img}
        />
      </a>
      <div className={styles.movieCard__infoContainer}>
        <h3 className={styles.movieCard__title}>{nameRU}</h3>
        {/*Разные кнопки на разных страницах*/}
        {savedMoviesPage ? (
          <button
            className={classNames(styles.movieCard__like, 'opacity_btn')}
            onClick={() => onRemove(movie._id)}
          >
            <Del />
          </button>
        ) : (
          <button
            className={classNames(styles.movieCard__like, 'opacity_btn')}
            onClick={() => onLike({ movie })}
          >
            <LikeBtn />
          </button>
        )}
      </div>
      <p className={styles.movieCard__length}>{timeConversion(duration)}</p>
    </article>
  );
};

export default MovieCard;
