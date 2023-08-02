import React from 'react';
import BlockHeader from '../BlockHeader/BlockHeader';
import styles from './Techs.module.css';

const Techs = () => {
  return (
    <section className={styles.tech}>
      <BlockHeader title={'Технологии'}/>
      <h2 className={styles.tech__heading}>7 технологий</h2>
      <p className={styles.tech__text}>На курсе веб-разработки мы освоили технологии, которые
        применили в дипломном проекте.</p>
      <ul className={styles.tech__list}>
        <li className={styles.tech__item}>HTML</li>
        <li className={styles.tech__item}>CSS</li>
        <li className={styles.tech__item}>JS</li>
        <li className={styles.tech__item}>React</li>
        <li className={styles.tech__item}>Git</li>
        <li className={styles.tech__item}>Express.js</li>
        <li className={styles.tech__item}>mongoDB</li>
      </ul>
    </section>
  );
};

export default Techs;