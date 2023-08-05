import React from 'react';
import Header from '../components/Header/Header';
import { Link } from 'react-router-dom';
import SearchForm from '../components/SearchForm/SearchForm';
import MoviesCardList from '../components/MoviesCardList/MoviesCardList';
import Footer from '../components/Footer/Footer';
import SavedMovies from '../components/SavedMovies/SavedMovies';

const SavedMoviesPage = () => {
  return (
    <>
      <Header>
        <Link>Регистрация</Link>
        <Link>Войти</Link>
      </Header>
      <SavedMovies>
        <SearchForm/>
        <MoviesCardList savedMovies={true}/>
      </SavedMovies>
      <Footer/>
    </>
  );
};

export default SavedMoviesPage;