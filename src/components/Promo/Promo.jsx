import React from 'react';
import logo from '../../images/promo__logo.svg'
import styles from './Promo.module.css'
const Promo = () => {
  return (
    <section className={styles.promo}>
      <div className={styles.promo__container}>
        <div className={styles.promo__textContainer}>
          <h1 className={styles.promo__heading}>Учебный проект студента факультета Веб-разработки.</h1>
          <p className={styles.promo__subtitle}>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        </div>
        <button className={styles.promo__infoBtn}>Узнать больше</button>
      </div>
      <img src={logo} alt="глобус из слова web" className={styles.promo__logo}/>
    </section>
  );
};

export default Promo;