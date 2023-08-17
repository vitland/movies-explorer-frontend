let initialMovies;
let moviesToAdd;
const getMovieCount = (width) => {
  if (width >= 1139) {
    initialMovies = 16;
    moviesToAdd = 4;
  } else if (width >= 901 && width <= 1138) {
    initialMovies = 12;
    moviesToAdd = 3;
  } else if (width <= 900 && width >= 707) {
    initialMovies = 8;
    moviesToAdd = 2;
  } else {
    initialMovies = 5;
    moviesToAdd = 2;
  }
};

export {initialMovies, moviesToAdd, getMovieCount}