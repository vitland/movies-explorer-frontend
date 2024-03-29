const URL = 'https://api.nomoreparties.co/beatfilm-movies';
const getResult = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};
const getAllMovies = () => fetch(URL).then((res) => getResult(res));
export default getAllMovies;
