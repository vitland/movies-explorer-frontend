import React, { useState } from 'react';
import Auth from '../components/Auth/Auth';
import { useAuth } from '../contexts/AuthContext';
import { signIn } from '../utils/api/MainApi';
import { useNavigate } from 'react-router';

const LoginPage = () => {
  const { setUser } = useAuth();
  const [error, setError] = useState({});
  const navigate = useNavigate()
  const handleSubmit = (values) => {
    setError({})
    const { email, password } = values;
    signIn({ email, password })
    .then(({ data:{name, email} } ) => {
      setUser({name, email, isLoggedIn: true});
      localStorage.setItem('isLoggedIn', JSON.stringify(true))
      navigate('/movies')
    })
    .catch(e => setError({ msg: e.response }));
  };

  return (
    <Auth link={'/signup'} text={'Ещё не зарегистрированы?'} linkText={'Регистрация'} heading={'Рады видеть!'} name={false} handleSubmit={handleSubmit} error={error}>
    </Auth>
  );
};

export default LoginPage;