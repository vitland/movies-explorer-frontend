import styles from './Profile.module.css';
import classNames from 'classnames';
import { useFormWithValidation } from '../../hooks/useForm';
import { useAuth } from '../../contexts/AuthContext';
import React, { useState } from 'react';
import { updateUser } from '../../utils/api/MainApi';

const Button = ({ isValid }) => {
  return (
    <>
      <div className="">
        <button className={classNames(styles.profile__button, 'opacity_btn')}
                disabled={!isValid} type={'submit'}>Редактировать
        </button>
        <button className={classNames(styles.profile__button, styles.profile__button_out,
          'opacity_btn')}>Выйти из аккаунта
        </button>
      </div>
    </>
  );

};
const Profile = () => {
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  const [serverError, setServerError] = useState(null);
  const { user: { name, email } } = useAuth();

  const handleSubmit = (e) => {
    console.log('sub');
    e.preventDefault();
    updateUser({ name: values.text, email: values.email })
    .catch(e => setServerError(e.response));
  };

  return (
    <main className={styles.profile}>
      <section className={styles.profile__container}>
        <h2 className={styles.profile__heading}>Привет, Виталий!</h2>
        <form className={styles.profile__form} onSubmit={handleSubmit}>
          <div className="">
            <div className={styles.profile__textContainer}>
              <label htmlFor={'name'} className={styles.profile__label}>Имя</label>
              <input
                type="text"
                name={'name'}
                className={styles.profile__input}
                placeholder={name}
                value={values.text || ''}
                onChange={handleChange}
                minLength={2}
                maxLength={40}/>
            </div>
            <div className={styles.profile__textContainer}>
              <label htmlFor={'email'} className={styles.profile__label}>E-mail</label>
              <input type="email"
                     name={'email'}
                     className={styles.profile__input}
                     placeholder={email}
                     value={values.email || ''}
                     onChange={handleChange}
                     minLength={2}
                     maxLength={40}/>
            </div>
          </div>
          <span>{(errors.text || errors.email) ?? null}</span>
          <span>{serverError ?? null}</span>
          <Button isValid={isValid}/>
        </form>
      </section>
    </main>
  );
};

export default Profile;