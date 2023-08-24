import styles from './Profile.module.css';
import classNames from 'classnames';
import { useFormWithValidation } from '../../hooks/useForm';
import { useAuth } from '../../contexts/AuthContext';
import React, { useEffect, useState } from 'react';
import { signOut, updateUser } from '../../utils/api/MainApi';
import { useNavigate } from 'react-router';
import Error from '../Error/Error';
import Success from '../Success/Success';

const Profile = () => {
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  const [serverError, setServerError] = useState(null);
  const [success, setSuccess] = useState(null);
  const { user: { name, email }, setUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccess(false)
    }, 3000);
    return () => clearTimeout(timer);
  }, [success]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ name: values.text, email: values.email })
    .then(({ data:{name, email} })=>{
      setUser((prev)=> ({...prev, name, email}))
      setServerError(null)
      setSuccess(true)
    })
    .catch(e => setServerError(e.response));
  };

  const handleSignOut = () => {
    signOut().then(() => {
      setUser({});
      localStorage.clear();
      navigate('/');
    }).catch(e => setServerError(e.response));

  };

  return (
    <main className={styles.profile}>
      <section className={styles.profile__container}>
        <h2 className={styles.profile__heading}>{`Привет, ${name}!`}</h2>
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
          {(errors.text || errors.email)?<Error msg={errors.text || errors.email} type={true}/>:null}
          {serverError?<Error msg={"При обновлении профиля произошла ошибка"} type={true}/>:null}
          {success?<Success msg={"Данные обновлены успешно"} type={true}/>:null}
          <div className="">
            <button className={classNames(styles.profile__button, 'opacity_btn')}
                    disabled={!isValid} type={'submit'}>Редактировать
            </button>
            <button type={'button'}
                    className={classNames(styles.profile__button, styles.profile__button_out,
                      'opacity_btn')} onClick={handleSignOut}>Выйти из аккаунта
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Profile;