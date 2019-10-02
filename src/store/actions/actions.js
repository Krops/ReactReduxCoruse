import axios from 'axios';
import { itemsIsLoading, itemsFetchDataSuccess, itemsHasErrored, postAdded, redirectToHome, postUpdated, postDeleted, loginAction } from './actionCreators'


export function getPosts() {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));
    axios.get('/api/posts')
      .then((response) => {
        if (response.status != 200) {
          throw Error(response.statusText);
        }
        dispatch(itemsIsLoading(false));
        return response;
      })
      .then((response) => response.data)
      .then((items) => dispatch(itemsFetchDataSuccess(items)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}

export function addPost(valueForm) {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));
    axios.post('/api/addPost', { ...valueForm })
      .then((response) => {
        if (response.status != 201) {
          throw Error(response.statusText);
        }
        dispatch(itemsIsLoading(false));
        return valueForm;
      })
      .then((item) => dispatch(postAdded(item)))
      .catch(() => dispatch(itemsHasErrored(true)))
      .then(() => dispatch(redirectToHome(true)));
  };
}

export function updatePost(valueForm) {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));
    axios.put('/api/posts/' + valueForm.id, { ...valueForm })
      .then((response) => {
        if (response.status != 200) {
          throw Error(response.statusText);
        }
        dispatch(itemsIsLoading(false));
        return valueForm;
      })
      .then((item) => dispatch(postUpdated(item)))
      .then(() => dispatch(redirectToHome(true)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}

export function deletePost(id) {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));
    axios.delete('/api/posts/' + id)
      .then((response) => {
        if (response.status != 200) {
          throw Error(response.statusText);
        }
        dispatch(itemsIsLoading(false));
        return id;
      })
      .then((id) => dispatch(postDeleted(id)))
      .then(() => dispatch(redirectToHome(true)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}

export function login(valueForm) {
  return (dispatch) => {
    if (valueForm.login === 'admin') {
      dispatch(loginAction(true));
      localStorage.setItem("token", 'FakeLogin')
    }
    else {
      dispatch(loginAction(false));
      localStorage.removeItem("token")
    }
  };

}

export function logout() {
  return (dispatch) => {
    dispatch(loginAction(false));
    localStorage.removeItem("token")
  };

}