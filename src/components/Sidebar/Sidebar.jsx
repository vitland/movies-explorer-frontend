import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Sidebar.module.css';
import userIcon_dark from '../../images/user_icon_dark.svg';
import { ReactComponent as CloseIcon } from '../../images/closeBtn.svg';

const Sidebar = () => {
  return (
    <div className={classNames(styles.sidebar)}>
      <aside className={styles.sidebar__container}>
        <button className={styles.sidebar__closeBtn}><CloseIcon/></button>
        <nav className={styles.sidebar_nav}>
          <ul className={styles.sidebar__links}>
            <li><NavLink to={'/'} className={(({ isActive }) => isActive
              ? classNames(styles.sidebar__link, styles.sidebar__link_active)
              : classNames(styles.sidebar__link,
              ))}>Главная</NavLink></li>
            <li><NavLink to={'/movies'} className={(({ isActive }) => isActive
              ? classNames(styles.sidebar__link, styles.sidebar__link_active)
              : classNames(styles.sidebar__link,
              ))}>Фильмы</NavLink></li>
            <li><NavLink to={'saved-movies'} className={(({ isActive }) => isActive
              ? classNames(styles.sidebar__link, styles.sidebar__link_active)
              : classNames(styles.sidebar__link,
              ))}>Сохранённые
              фильмы</NavLink></li>
          </ul>
        </nav>
        <Link to={'/profile'} className={classNames(styles.sidebar__link, styles.sidebar__link_profile)}>
          <span>Аккаунт</span>
          <img src={userIcon_dark} alt="Иконка юзера" className={classNames("opacity_btn")}/>
        </Link>
      </aside>
    </div>
  );
};

export default Sidebar;