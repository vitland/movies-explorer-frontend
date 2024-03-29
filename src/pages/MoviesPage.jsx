import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Movies from '../components/Movies/Movies';

const MoviesPage = () => {
  return (
    <>
      <Header light={true} />
      <Movies />
      <Footer />
    </>
  );
};

export default MoviesPage;
