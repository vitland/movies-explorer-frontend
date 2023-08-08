import React from 'react';
import Header from '../components/Header/Header';
import SearchForm from '../components/SearchForm/SearchForm';
import MoviesCardList from '../components/MoviesCardList/MoviesCardList';
import Footer from '../components/Footer/Footer';
import SavedMovies from '../components/SavedMovies/SavedMovies';

const SavedMoviesPage = () => {
  return (
    <>
      <Header light={true} isLoggedIn={true}/>
      <SavedMovies>
        <SearchForm/>
        <MoviesCardList savedMovies={true}/>
      </SavedMovies>
      <Footer/>
    </>
  );
};

export default SavedMoviesPage;