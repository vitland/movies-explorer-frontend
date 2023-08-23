import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Movies from '../components/Movies/Movies';

const SavedMoviesPage = () => {
  return (
    <>
      <Header light={true} />
      <Movies savedMoviesPage={true}/>
      <Footer/>
    </>
  );
};

export default SavedMoviesPage;