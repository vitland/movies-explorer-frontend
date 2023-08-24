const URL = 'api.moviefeed.nomoreparties.sbs';

const getResult = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return res.json().then((result) => {
      let error = new Error(`Ошибка ${res.status}`);
      error.response = result.message;
      throw error;
    });
  }
}

  export const getUser = () => {
    return fetch(`${URL}/users/me`, { credentials: 'include' }).then((res) => getResult(res));
  };

  export const updateUser = ({ name, email }) => {
    return fetch(`${URL}/users/me`, {
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

  export const addMovie = ( movie ) => {
    return fetch(`${URL}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(movie),
    }).then((res) => getResult(res));
  };

  export const removeMovie = (movieId) => {
    return fetch(`${URL}/movies/${movieId}`, {
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
      method: 'DELETE',
      credentials: 'include',
    }).then((res) => getResult(res));
  };

export const  validateToken =() => {
  return fetch(`${URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  }).then((res) => getResult(res));
}