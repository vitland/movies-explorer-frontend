const movieFilter = (list, isShort, query) => {
  let filteredMovies = list.filter(
    (movie) =>
      movie.nameRU.toLowerCase().includes(query.toLowerCase()) ||
      movie.nameEN.toLowerCase().includes(query.toLowerCase()),
  );
  if (isShort) {
    filteredMovies = filteredMovies.filter((movie) => movie.duration <= 40);
  }
  return filteredMovies;
};

export default movieFilter;
