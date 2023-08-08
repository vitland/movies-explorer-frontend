import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Movies from '../components/Movies/Movies';
import SearchForm from '../components/SearchForm/SearchForm';
import MoviesCardList from '../components/MoviesCardList/MoviesCardList';


const MoviesPage = () => {
  return (
    <>
      <Header light={true} isLoggedIn={true} />
      <Movies>
        <SearchForm/>
        <MoviesCardList/>
      </Movies>
      <Footer/>
    </>
  );
};

export default MoviesPage;