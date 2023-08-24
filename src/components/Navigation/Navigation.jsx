import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import classNames from 'classnames';

const Navigation = ({ dark, isLoggedIn }) => {
  if (isLoggedIn) {
    return (
      <nav className={styles.navigation}>
        <NavLink
          to={'/movies'}
          className={({ isActive }) =>
            isActive
              ? classNames(
                  styles.navigation__link,
                  styles.navigation__link_active,
                  { [styles.navigation__link_dark]: dark },
                  'opacity_link',
                )
              : classNames(
                  styles.navigation__link,
                  { [styles.navigation__link_dark]: dark },
                  'opacity_link',
                )
          }
        >
          Фильмы
        </NavLink>
        <NavLink
          to={'/saved-movies'}
          className={({ isActive }) =>
            isActive
              ? classNames(
                  styles.navigation__link,
                  styles.navigation__link_active,
                  { [styles.navigation__link_dark]: dark },
                  'opacity_link',
                )
              : classNames(
                  styles.navigation__link,
                  { [styles.navigation__link_dark]: dark },
                  'opacity_link',
                )
          }
        >
          Сохранённые фильмы
        </NavLink>
      </nav>
    );
  }
  return (
    <nav className={styles.navigation}>
      <Link
        to={'/signup'}
        className={classNames(styles.navigation__link, styles.navigation__link_reg, 'opacity_btn')}
      >
        Регистрация
      </Link>
      <Link
        to={'/signin'}
        className={classNames(
          styles.navigation__link,
          styles.navigation__link_login,
          'opacity_btn',
        )}
      >
        Войти
      </Link>
    </nav>
  );
};

export default Navigation;
