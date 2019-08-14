import axios from 'axios';

const RETRIEVE_POSTS = 'RETRIEVE_POSTS';
const ITEMS_HAS_ERRORED = 'ITEMS_HAS_ERRORED';
const ITEMS_IS_LOADING = 'ITEMS_IS_LOADING';
const REDIRECT_ON_SUCCESS = 'REDIRECT_ON_SUCCESS';
const CREATE_POST = 'CREATE_POST';
const UPDATE_POST = 'UPDATE_POST';
const REMOVE_POST = 'REMOVE_POST';

export function redirectToHome(bool) {
    return {
        type: REDIRECT_ON_SUCCESS,
        redirectOnSuccess: bool
    };
  }

export function itemsFetchDataSuccess(items) {
    return {
        type: RETRIEVE_POSTS,
        items
    };
  }
  
  export function itemsHasErrored(bool) {
    return {
        type: ITEMS_HAS_ERRORED,
        hasErrored: bool
    };
  }
  export function itemsIsLoading(bool) {
    return {
        type: ITEMS_IS_LOADING,
        isLoading: bool
    };
  }

  export function postAdded(item) {
    return {
        type: CREATE_POST,
        item: item
    };
  }

  export function postUpdated(item) {
    return {
        type: UPDATE_POST,
        item: item
    };
  }

  export function postDeleted(id) {
    return {
        type: REMOVE_POST,
        item: id
    };
  }


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
        axios.post('/api/addPost', {...valueForm})
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
        axios.put('/api/posts/'+ valueForm.id, {...valueForm})
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
        axios.delete('/api/posts/'+ id)
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