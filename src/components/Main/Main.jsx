import Promo from '../Promo/Promo';
import styles from './Main.module.css'
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
const Main = () => {
  return (
    <main className={styles.main}>
      <Promo/>
      <AboutProject/>
      <Techs/>
      <AboutMe/>
    </main>

  );
};

export default Main;
