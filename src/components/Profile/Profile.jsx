import React from 'react';
import styles from './Profile.module.css';
import classNames from 'classnames';

const Profile = () => {
  return (
    <section className={styles.profile}>
      <h2 className={styles.profile__heading}>Привет, Виталий!</h2>
        <div className={styles.profile__textContainer}>
          <span className={styles.profile__tableTitle}>Имя</span>
          <span className={styles.profile__tableValue}>Виталий</span>
        </div>
        <div className={styles.profile__textContainer}>
          <span className={styles.profile__tableTitle}>E-mail</span>
          <span className={styles.profile__tableValue}>pochta@yandex.ru</span>
        </div>
      <button className={classNames(styles.profile__button)}>Редактировать</button>
      <button className={classNames(styles.profile__button, styles.profile__button_out)}>Выйти из аккаунта</button>
    </section>
  );
};

export default Profile;