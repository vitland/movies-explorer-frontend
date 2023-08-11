import React from 'react';
import styles from './Footer.module.css';
import classNames from 'classnames';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.footer__heading}>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className={styles.footer__container}>
        <p className={styles.footer__copy}>© 2023</p>
        <div className={styles.footer__linksContainer}>
          <a href="https://practicum.yandex.ru/" className={classNames(styles.footer__link, "opacity_link")}>Яндекс.Практикум</a>
          <a href="https://github.com/vitland" className={classNames(styles.footer__link, "opacity_link")}>Github</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;