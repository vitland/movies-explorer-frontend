import React from 'react';
import Header from '../components/Header/Header';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Movies from '../components/Movies/Movies';
import SearchForm from '../components/SearchForm/SearchForm';
import MoviesCardList from '../components/MoviesCardList/MoviesCardList';

const MoviesPage = () => {
  return (
    <>
      <Header>
        <Link>Регистрация</Link>
        <Link>Войти</Link>
      </Header>
      <Movies>
        <SearchForm/>
        <MoviesCardList/>
      </Movies>
      <Footer/>
    </>
  );
};

export default MoviesPage;