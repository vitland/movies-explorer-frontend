import logo from '../../images/logo.svg';
import styles from './Header.module.css';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import userIcon_dark from '../../images/user_icon_dark.svg';
import userIcon from '../../images/user_icon.svg';
import { ReactComponent as Burger } from '../../images/burger.svg';
import { ReactComponent as BurgerLight } from '../../images/burger_light.svg';
import Navigation from '../Navigation/Navigation';
import { useSidebar } from '../../contexts/SidebarContext';
import { useAuth } from '../../contexts/AuthContext';

const Header = ({ light }) => {
  const { isOpened, setIsOpened } = useSidebar();
  const {
    user: { isLoggedIn },
  } = useAuth();

  return (
    <header className={classNames(styles.header, { [styles.header_light]: light })}>
      <div className={styles.header__container}>
        <Link to="/">
          <img src={logo} alt="логотип" className={classNames('opacity_btn')} />
        </Link>
        <Navigation isLoggedIn={isLoggedIn} dark={light} />
        {isLoggedIn ? (
          <Link
            to={'/profile'}
            className={classNames(
              styles.header__user,
              { [styles.header__user_dark]: light },
              'opacity_link',
            )}
          >
            <img src={!light ? userIcon : userIcon_dark} alt="иконка пользователя" />
            <span>Аккаунт</span>
          </Link>
        ) : null}
        <button
          className={classNames(styles.header__burger, 'opacity_btn')}
          onClick={() => setIsOpened(!isOpened)}
        >
          {light ? <Burger /> : <BurgerLight />}
        </button>
      </div>
    </header>
  );
};

export default Header;
