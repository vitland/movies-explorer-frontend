import React from 'react';
import { useNavigate } from 'react-router';
import styles from './NotFound.module.css';
import classNames from 'classnames';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <main className={styles.notFound}>
      <h2 className={styles.notFound__heading}>404</h2>
      <span className={styles.notFound__subTitle}>Страница не найдена</span>
      <button
        className={classNames(styles.notFound__btn, 'opacity_btn')}
        onClick={() => navigate(-1)}
      >
        Назад
      </button>
    </main>
  );
};

export default NotFound;
