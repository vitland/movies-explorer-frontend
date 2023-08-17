import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Movies from '../components/Movies/Movies';
import { useEffect } from 'react';



const MoviesPage = () => {

  return (
    <>
      <Header light={true} isLoggedIn={false} />
      <Movies/>
      <Footer/>
    </>
  );
};

export default MoviesPage;