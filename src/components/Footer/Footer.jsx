import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.footer__heading}>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className={styles.footer__container}>
        <p className={styles.footer__copy}>© 2023</p>
        <div className={styles.footer__linksContainer}>
          <a href="" className={styles.footer__link}>Яндекс.Практикум</a>
          <a href="" className={styles.footer__link}>Github</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;