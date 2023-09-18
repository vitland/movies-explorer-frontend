const URL = 'https://api.moviefeed.nomoreparties.sbs';

const getResult = (res) => {
  if (res.ok) {
    return res.json();
  }
  return res.json().then((result) => {
    const error = new Error(`Ошибка ${res.status}`);
    error.response = result.message;
    throw error;
  });
};

export const getUser = () =>
  fetch(`${URL}/users/me`, { credentials: 'include' }).then((res) => getResult(res));

export const updateUser = ({ name, email }) =>
  fetch(`${URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ name, email }),
  }).then((res) => getResult(res));

export const getMovies = () =>
  fetch(`${URL}/movies`, { credentials: 'include' }).then((res) => getResult(res));

export const addMovie = (movie) =>
  fetch(`${URL}/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(movie),
  }).then((res) => getResult(res));

export const removeMovie = (_id) =>
  fetch(`${URL}/movies/${_id}`, {
    method: 'DELETE',
    credentials: 'include',
  }).then((res) => getResult(res));

export const signUp = ({ name, email, password }) =>
  fetch(`${URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ name, email, password }),
  }).then((res) => getResult(res));

export const signIn = ({ email, password }) =>
  fetch(`${URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  }).then((res) => getResult(res));

export const signOut = () =>
  fetch(`${URL}/signout`, {
    method: 'DELETE',
    credentials: 'include',
  }).then((res) => getResult(res));
