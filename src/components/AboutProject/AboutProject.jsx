import React from 'react';
import styles from './AboutProject.module.css';
import BlockHeader from '../BlockHeader/BlockHeader';
import classNames from 'classnames';

const AboutProject = () => {
  return (
    <section className={styles.about}>
      <BlockHeader title={'О проекте'}/>
      <div className={styles.about__container}>
        <article>
          <h3 className={styles.about__heading}>Дипломный проект включал 5 этапов</h3>
          <p className={styles.about__text}>Составление плана, работу над бэкендом, вёрстку,
            добавление функциональности и финальные доработки.</p>
        </article>
        <article>
          <h3 className={styles.about__heading}>На выполнение диплома ушло 5 недель</h3>
          <p className={styles.about__text}>У каждого этапа был мягкий и жёсткий дедлайн, которые
            нужно было соблюдать, чтобы успешно защититься.</p>
        </article>
      </div>
      <div className={styles.about__chart}>
        <p className={classNames(styles.about__chartText, styles.about__chartText_left)}>1 неделя</p>
        <p className={styles.about__chartSubtext}>Back-end</p>
        <p className={classNames(styles.about__chartText, styles.about__chartText_right)}>4
          неделя</p>
        <p className={styles.about__chartSubtext}>Front-end</p>
      </div>
    </section>

  );
};

export default AboutProject;