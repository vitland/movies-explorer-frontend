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
      <button className={classNames(styles.profile__button)}>Редактировать</button>
      <button className={classNames(styles.profile__button, styles.profile__button_out)}>Выйти из
        аккаунта
      </button>
    </>
  );

};
const Profile = () => {
  return (
    <section className={styles.profile}>
      <h2 className={styles.profile__heading}>Привет, Виталий!</h2>
      <form>
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
        <Button isModified={false}/>
      </form>
    </section>
  );
};

export default Profile;