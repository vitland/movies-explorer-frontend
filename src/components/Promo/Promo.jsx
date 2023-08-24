import React from 'react';
import logo from '../../images/promo__logo.svg';
import styles from './Promo.module.css';
import classNames from 'classnames';
const Promo = () => {
  return (
    <section className={styles.promo}>
      <div className={styles.promo__container}>
        <div className={styles.promo__textContainer}>
          <h1 className={styles.promo__heading}>
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <p className={styles.promo__subtitle}>
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <a href={'#AboutProject'} className={classNames(styles.promo__infoBtn, 'opacity_btn')}>
            Узнать больше
          </a>
        </div>
        <img src={logo} alt="глобус из слова web" className={styles.promo__img} />
      </div>
    </section>
  );
};

export default Promo;
