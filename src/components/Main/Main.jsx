import Promo from '../Promo/Promo';
import styles from './Main.module.css'
import AboutProject from '../AboutProject/AboutProject';
const Main = () => {
  return (
    <main className={styles.main}>
      <Promo/>
      <AboutProject/>
    </main>

  );
};

export default Main;
