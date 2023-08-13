import React from 'react';
import styles from './Profile.module.css';
import classNames from 'classnames';
import SubmitButton from '../SubmitButton/SubmitButton';

const Button = ({ isModified }) => {
  if (isModified) {
    return (
      <SubmitButton text={'Сохранить'}/>
    );
  }
  return (
    <>
      <div className="">
      <button className={classNames(styles.profile__button, 'opacity_btn')}>Редактировать</button>
      <button className={classNames(styles.profile__button, styles.profile__button_out, 'opacity_btn')}>Выйти из
        аккаунта
      </button>
      </div>
    </>
  );

};
const Profile = () => {
  return (
    <main className={styles.profile}>
      <section className={styles.profile__container}>
      <h2 className={styles.profile__heading}>Привет, Виталий!</h2>
      <form className={styles.profile__form}>
        <div className="">
        <div className={styles.profile__textContainer}>
          <label htmlFor={'name'} className={styles.profile__label}>Имя</label>
          <input type="text" name={'name'} className={styles.profile__input}
                 placeholder={'Виталий'} disabled/>
        </div>
        <div className={styles.profile__textContainer}>
          <label htmlFor={'email'} className={styles.profile__label}>E-mail</label>
          <input type="email" name={'email'} className={styles.profile__input}
                 placeholder={'pochta@yandex.ru'} disabled/>
        </div>
        </div>
        <Button isModified={false}/>
      </form>
      </section>
    </main>
  );
};

export default Profile;