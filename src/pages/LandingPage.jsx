import React from 'react';
import Header from '../components/Header/Header';
import { Link } from 'react-router-dom';
import Promo from '../components/Promo/Promo';
import AboutProject from '../components/AboutProject/AboutProject';
import Techs from '../components/Techs/Techs';
import AboutMe from '../components/AboutMe/AboutMe';
import Footer from '../components/Footer/Footer';
import Main from '../components/Main/Main';

const LandingPage = () => {
  return (
    <>
      <Header>
        <Link>Регистрация</Link>
        <Link>Войти</Link>
      </Header>
      <Main>
        <Promo/>
        <AboutProject/>
        <Techs/>
        <AboutMe/>
      </Main>
      <Footer/>
    </>
  );
};

export default LandingPage;