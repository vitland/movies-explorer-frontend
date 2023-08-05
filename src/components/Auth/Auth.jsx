import React from 'react';
import styles from './Auth.module.css';
import Logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

const Auth = ({children, link, heading, text, linkText }) => {
  return (
    <section className={styles.auth}>
      <img src={Logo} alt="" className={styles.auth__logo}/>
      <h2 className={styles.auth__heading}>{heading}</h2>
      {children}
      <span className={styles.auth__text}>{text}<Link to={link} className={styles.auth__link}>{linkText}</Link>
      </span>
    </section>
  );
};

export default Auth;