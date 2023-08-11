import React from 'react';
import UserInput from '../components/UserInput/UserInput';
import UserForm from '../components/UserForm/UserForm';
import SubmitButton from '../components/SubmitButton/SubmitButton';
import Auth from '../components/Auth/Auth';

const LoginPage = () => {
  return (
    <Auth link={'/signup'} text={'Ещё не зарегистрированы?'} linkText={'Регистрация'} heading={'Рады видеть!'}>
      <UserForm button={<SubmitButton text={'Войти'}/>}>
        <UserInput name={'E-mail'} type={'email'} placeholder={'pochta@yandex.ru'}/>
        <UserInput name={'Пароль'} type={'password'}/>
      </UserForm>
    </Auth>
  );
};

export default LoginPage;