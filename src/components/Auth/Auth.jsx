import React from 'react';
import styles from './Auth.module.css';
import Logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import SubmitButton from '../SubmitButton/SubmitButton';
import UserInput from '../UserInput/UserInput';
import UserForm from '../UserForm/UserForm';
import { useFormWithValidation } from '../../hooks/useForm';

const Auth = ({ link, heading, text, linkText, name, handleSubmit, error }) => {
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(values);
  };
  const btnText = name ? 'Зарегистрироваться' : 'Войти';

  return (
    <main className={styles.auth}>
      <section className={styles.auth__container}>
        <div className={styles.auth__headingContainer}>
          <Link to={'/'}>
            <img src={Logo} alt="логотип" className={styles.auth__logo}/>
          </Link>
          <h2 className={styles.auth__heading}>{heading}</h2>
        </div>
        <UserForm button={<SubmitButton text={btnText} status={isValid}/>} onSubmit={onSubmit}
                  error={error}>
          {name && (
            <UserInput name={'Имя'}
                       type={'text'}
                       value={values.text || ''}
                       onChange={handleChange}
                       placeholder={'Введите имя'}
                       minLength={'2'}
                       maxLength={'40'}
                       errors={errors}/>
          )}
          <UserInput name={'E-mail'}
                     type={'email'}
                     placeholder={'pochta@yandex.ru'}
                     value={values.email || ''}
                     onChange={handleChange}
                     minLength={'2'}
                     maxLength={'40'}
                     errors={errors}/>
          <UserInput name={'Пароль'}
                     type={'password'}
                     placeholder={'password'}
                     value={values.password || ''}
                     onChange={handleChange}
                     minLength={'8'}
                     maxLength={'40'}
                     errors={errors}/>
        </UserForm>
        <span className={styles.auth__text}>{text}<Link to={link}
                                                        className={classNames(styles.auth__link,
                                                          'opacity_link')}>{linkText}</Link>
      </span>
      </section>
    </main>
  );
};

export default Auth;