import React from 'react';
import logo from '../../images/logo.svg';
import styles from './Header.module.css';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import userIcon_dark from '../../images/user_icon_dark.svg';
import userIcon from '../../images/user_icon.svg';
import {ReactComponent as Burger} from '../../images/burger.svg';
import {ReactComponent as BurgerLight} from '../../images/burger_light.svg';
import Navigation from '../Navigation/Navigation';

const Header = ({ light, isLoggedIn }) => {
  return (
    <header className={classNames(styles.header, { [styles.header_light]: light })}>
      <div className={styles.header__container}>
        <Link to="/">
          <img src={logo} alt="логотип"/>
        </Link>
        <Navigation isLoggedIn={isLoggedIn} dark={light}/>
        {isLoggedIn ?
          <Link to={'/profile'} className={classNames(styles.header__user,
            { [styles.header__user_dark]: light }, 'opacity_link')}>
            <img src={!light ? userIcon : userIcon_dark} alt=""/>
            <span>Аккаунт</span>
          </Link> : null}
        <button className={classNames(styles.header__burger)}>{light?<Burger/>:<BurgerLight/>}</button>
      </div>
    </header>
  );
};

export default Header;