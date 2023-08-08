import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import userIcon from '../../images/user_icon.svg';
import userIcon_dark from '../../images/user_icon_dark.svg';
import styles from './Navigation.module.css';
import classNames from 'classnames';

const Navigation = ({ dark, isLoggedIn }) => {
  if (isLoggedIn) {
    return (
      <nav className={styles.navigation}>
          <NavLink to={'/movies'}
                   className={(({ isActive }) => isActive
                     ? classNames(styles.navigation__link, styles.navigation__link_active,
                       { [styles.navigation__link_dark]: dark })
                     : classNames(styles.navigation__link,
                       { [styles.navigation__link_dark]: dark },
                     ))}>Фильмы</NavLink>
          <NavLink to={'/saved-movies'}
                   className={(({ isActive }) => isActive
                     ? classNames(styles.navigation__link, styles.navigation__link_active,
                       { [styles.navigation__link_dark]: dark })
                     : classNames(styles.navigation__link,
                       { [styles.navigation__link_dark]: dark },
                     ))}>Сохранённые
            фильмы</NavLink>
      </nav>
    );
  }
  return (
    <nav className={styles.navigation}>
      <Link to={'/signup'} className={classNames(styles.navigation__link,
        styles.navigation__link_reg)}>Регистрация</Link>
      <Link to={'/signin'} className={classNames(styles.navigation__link,
        styles.navigation__link_login)}>Войти</Link>
    </nav>
  );

};

export default Navigation;