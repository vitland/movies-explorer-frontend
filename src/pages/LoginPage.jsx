import React, { useState } from 'react';
import Auth from '../components/Auth/Auth';
import { useAuth } from '../contexts/AuthContext';
import { signIn } from '../utils/api/MainApi';
import { useNavigate } from 'react-router';

const LoginPage = () => {
  const { setUser } = useAuth();
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    setError({});
    setLoading(true);
    const { email, password } = values;
    signIn({ email, password })
      .then(({ data: { name, email } }) => {
        setLoading(false);
        console.log(name, email);
        setUser({ name, email, isLoggedIn: true });
        localStorage.setItem('user', JSON.stringify({ name, email, isLoggedIn: true }));
        navigate('/movies');
      })
      .catch((e) => {
        setLoading(false);
        setError({ msg: e.response });
      })
      .finally(() => setLoading(false));
  };

  return (
    <Auth
      link={'/signup'}
      text={'Ещё не зарегистрированы?'}
      linkText={'Регистрация'}
      heading={'Рады видеть!'}
      name={false}
      handleSubmit={handleSubmit}
      error={error}
      loading={loading}
    ></Auth>
  );
};

export default LoginPage;
