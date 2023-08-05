import React from 'react';
import styles from './MovieCard.module.css';
import { ReactComponent as Like }  from '../../images/likeBtn.svg';
import { ReactComponent as Del }  from '../../images/delBtn.svg';

const MovieCard = () => {
  return (
    <article className={styles.movieCard}>
      <img src={require('../../images/moviePic.png')} alt="" className=""/>
      <div className={styles.movieCard__infoContainer}>
        <h3 className={styles.movieCard__title}>33 слова о дизайне</h3>
        <button className={styles.movieCard__like}>
          <Like />
        </button>
      </div>
      <p className={styles.movieCard__length}>1ч 42м</p>
    </article>
  );
};

export default MovieCard;