import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Sidebar.module.css';
import userIcon_dark from '../../images/user_icon_dark.svg';
import { ReactComponent as CloseIcon } from '../../images/closeBtn.svg';
import { useSidebar } from '../../contexts/SidebarContext';

const Sidebar = () => {
  const { isOpened, setIsOpened } = useSidebar();
  return (
    <div className={classNames(styles.sidebar, { [styles.sidebar_active]: isOpened })}>
      <aside className={styles.sidebar__container}>
        <button
          className={classNames(styles.sidebar__closeBtn, 'opacity_btn')}
          onClick={() => setIsOpened(!isOpened)}
        >
          <CloseIcon />
        </button>
        <nav className={styles.sidebar_nav}>
          <ul className={styles.sidebar__links}>
            <li>
              <NavLink
                to={'/'}
                className={({ isActive }) =>
                  isActive
                    ? classNames(styles.sidebar__link, styles.sidebar__link_active, 'opacity_link')
                    : classNames(styles.sidebar__link, 'opacity_link')
                }
              >
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/movies'}
                className={({ isActive }) =>
                  isActive
                    ? classNames(styles.sidebar__link, styles.sidebar__link_active, 'opacity_link')
                    : classNames(styles.sidebar__link, 'opacity_link')
                }
              >
                Фильмы
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/saved-movies'}
                className={({ isActive }) =>
                  isActive
                    ? classNames(styles.sidebar__link, styles.sidebar__link_active, 'opacity_link')
                    : classNames(styles.sidebar__link, 'opacity_link')
                }
              >
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>
        </nav>
        <Link
          to={'/profile'}
          className={classNames(styles.sidebar__link, styles.sidebar__link_profile, 'opacity_link')}
        >
          <span>Аккаунт</span>
          <img src={userIcon_dark} alt="Иконка юзера" />
        </Link>
      </aside>
    </div>
  );
};

export default Sidebar;
