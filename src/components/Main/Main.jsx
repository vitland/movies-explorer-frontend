import Promo from '../Promo/Promo';
import styles from './Main.module.css';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <Header>
        <Link>Регистрация</Link>
        <Link>Войти</Link>
      </Header>
      <main className={styles.main}>
        <Promo/>
        <AboutProject/>
        <Techs/>
        <AboutMe/>
      </main>
      <Footer/>
    </>
  );
};

export default Main;
