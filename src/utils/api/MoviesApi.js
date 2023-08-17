const URL = 'https://api.nomoreparties.co/beatfilm-movies'
const getResult = (res) => {
  console.log(res);
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};
export const getAllMovies = () => {
  return fetch(URL).then((res)=> getResult(res))
};