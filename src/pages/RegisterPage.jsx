import React from 'react';
import UserInput from '../components/UserInput/UserInput';
import UserForm from '../components/UserForm/UserForm';
import SubmitButton from '../components/SubmitButton/SubmitButton';
import Auth from '../components/Auth/Auth';

const RegisterPage = () => {
  return (
    <Auth link={'/signin'} text={'Уже зарегистрированы?'} linkText={'Войти'} heading={'Добро пожаловать!'}>
      <UserForm>
        <UserInput name={'Имя'} type={'text'} placeholder={'Виталий'}/>
        <UserInput name={'E-mail'} type={'email'} placeholder={'pochta@yandex.ru'}/>
        <UserInput name={'Пароль'} type={'password'}/>
        <SubmitButton text={'Зарегистрироваться'}/>
      </UserForm>
    </Auth>
  );
};

export default RegisterPage;