import React, { useState } from 'react';
import Auth from '../components/Auth/Auth';
import { signIn, signUp } from '../utils/api/MainApi';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router';

const RegisterPage = () => {
  const { setUser } = useAuth();
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    setError({});
    const { text: name, email, password } = values;
    signUp({ name, email, password })
      .then(() => {
        setLoading(true);
        return signIn({ email, password });
      })
      .then(({ data: { name, email } }) => {
        setUser({ name, email, isLoggedIn: true });
        localStorage.setItem('user', JSON.stringify({ name, email, isLoggedIn: true }));
        navigate('/movies');
        setLoading(false);
      })
      .catch((e) => {
        setError({ msg: e.response });
        setLoading(false);
      })
      .finally(() => setLoading(false));
  };

  return (
    <Auth
      link={'/signin'}
      text={'Уже зарегистрированы?'}
      linkText={'Войти'}
      heading={'Добро пожаловать!'}
      name={true}
      handleSubmit={handleSubmit}
      error={error}
      loading={loading}
    ></Auth>
  );
};

export default RegisterPage;
