import React from 'react';
import Header from '../components/Header/Header';
import Promo from '../components/Promo/Promo';
import AboutProject from '../components/AboutProject/AboutProject';
import Techs from '../components/Techs/Techs';
import AboutMe from '../components/AboutMe/AboutMe';
import Footer from '../components/Footer/Footer';
import Main from '../components/Main/Main';
import Portfolio from '../components/Portfolio/Portfolio';


const LandingPage = () => {
  return (
    <>
      <Header isLoggedIn={true}/>
      <Main>
        <Promo/>
        <AboutProject/>
        <Techs/>
        <AboutMe/>
        <Portfolio/>
      </Main>
      <Footer/>
    </>
  );
};

export default LandingPage;