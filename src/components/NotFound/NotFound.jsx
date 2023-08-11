import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';
import classNames from 'classnames';

const NotFound = () => {
  return (
    <section className={styles.notFound}>
      <h2 className={styles.notFound__heading}>404</h2>
      <span className={styles.notFound__subTitle}>Страница не найдена</span>
      <Link to={'/'} className={classNames(styles.notFound__link, 'opacity_link')}>Назад</Link>
    </section>
  );
};

export default NotFound;