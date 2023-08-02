import React from 'react';
import logo from '../../images/logo.svg';
import styles from './Header.module.css';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Header = ({ children }) => {
  return (
    <header className={classNames(styles.header)}>
      <div className={styles.header__container}>
        <Link to="/">
          <img src={logo} alt="" className=""/>
        </Link>
        <nav className={styles.header__userContainer}>
          {children}
        </nav>
      </div>
    </header>
  );
};

export default Header;