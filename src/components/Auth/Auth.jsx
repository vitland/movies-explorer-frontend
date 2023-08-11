import React from 'react';
import styles from './Auth.module.css';
import Logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const Auth = ({children, link, heading, text, linkText }) => {
  return (
    <section className={styles.auth}>
      <div className={styles.auth__container}>
        <div className={styles.auth__headingContainer}>
          <Link to={'/'}>
          <img src={Logo} alt="" className={styles.auth__logo}/>
        </Link>
          <h2 className={styles.auth__heading}>{heading}</h2>
        </div>
        {children}
        <span className={styles.auth__text}>{text}<Link to={link} className={classNames(styles.auth__link, 'opacity_link')}>{linkText}</Link>
      </span>
      </div>
    </section>
  );
};

export default Auth;