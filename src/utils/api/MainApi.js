const URL = 'http://localhost:3000';

const getResult = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

export const getUser = () => {
  return fetch(`${URL}/users/me`, { credentials: 'include' }).then((res) => getResult(res));
};

export const updateUser = ({ name, email }) => {
  return fetch(`${URL}/user/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ name, email }),
  }).then((res) => getResult(res));
};

export const getMovies = () => {
  return fetch(`${URL}/movies`, { credentials: 'include' }).then((res) => getResult(res));
};


export const addMovie = (movie) => {
  return fetch(`${URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(movie),
  }).then((res) => getResult(res));
};

export const removeMovie = ({ _id }) => {
  return fetch(`${URL}/movies/${_id}`, {
    method: 'DELETE',
    credentials: 'include',
  }).then((res) => getResult(res));
};

export const signUp = ({ name, email, password }) => {
  return fetch(`${URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ name, email, password }),
  }).then((res) => getResult(res));
};

export const signIn = ({ email, password }) => {
  return fetch(`${URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  }).then((res) => getResult(res));
};

export const signOut = () => {
  return fetch(`${URL}/signout`, {
    credentials: 'include',
  }).then((res) => getResult(res));
};