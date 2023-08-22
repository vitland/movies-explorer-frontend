import React, { useState } from 'react';
import Auth from '../components/Auth/Auth';
import { signIn, signUp } from '../utils/api/MainApi';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router';

const RegisterPage = () => {
  const { user, setUser } = useAuth();
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    setError({});
    const { text: name, email, password } = values;
    signUp({ name, email, password }).then((res) => {
      setUser({ name, email, isLoggedIn: true });
      return res;
    }).then(() => {
        signIn({ email, password });
        localStorage.setItem('isLoggedIn', JSON.stringify(true));
        navigate('/movies');
      },
    ).catch(e => setError({ msg: e.response }));
  };

  return (
    <Auth link={'/signin'} text={'Уже зарегистрированы?'} linkText={'Войти'}
          heading={'Добро пожаловать!'} name={true} handleSubmit={handleSubmit} error={error}>
    </Auth>
  );
};

export default RegisterPage;