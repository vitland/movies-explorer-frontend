import React from 'react';
import styles from './AboutMe.module.css';
import BlockHeader from '../BlockHeader/BlockHeader';
import classNames from 'classnames';

const AboutMe = () => {
  return (
    <section className={styles.aboutMe}>
      <BlockHeader title={'Студент'}/>
      <article className={styles.aboutMe__infoContainer}>
        <div className={styles.aboutMe__textContainer}>
          <h2 className={styles.aboutMe__heading}>Виктор</h2>
          <p className={styles.aboutMe__subHeading}>Фронтенд-разработчик, 30 лет</p>
          <p className={styles.aboutMe__text}>Я родился и живу в Саратове, закончил факультет
            экономики СГУ. У меня есть
            жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С
            2015 года
            работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <a href="https://github.com/vitland" target={"_blank"} className={classNames( styles.aboutMe__gitlink, 'opacity_link')}>Github</a>
        </div>
        <img src={require('../../images/profile.png')} alt="Мое фото" className={styles.aboutMe__img}/>
      </article>
    </section>
  );
};

export default AboutMe;