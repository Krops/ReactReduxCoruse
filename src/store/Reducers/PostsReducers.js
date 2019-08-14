
//import loadash from 'lodash'

const RETRIEVE_POSTS = 'RETRIEVE_POSTS';
const ITEMS_HAS_ERRORED = 'ITEMS_HAS_ERRORED';
const ITEMS_IS_LOADING = 'ITEMS_IS_LOADING';
const CREATE_POST = 'CREATE_POST';
const REMOVE_POST = 'REMOVE_POST';
const UPDATE_POST = 'UPDATE_POST';
const REDIRECT_ON_SUCCESS = 'REDIRECT_ON_SUCCESS';

export function redirectToHome(state = false, action) {
  switch (action.type) {
    case REDIRECT_ON_SUCCESS:
      return action.redirectOnSuccess;
    default:
      return state;
  }
}

export function itemsHasErrored(state = false, action) {
  switch (action.type) {
    case ITEMS_HAS_ERRORED:
      return action.hasErrored;
    default:
      return state;
  }
}
export function itemsIsLoading(state = false, action) {
  switch (action.type) {
    case ITEMS_IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}
export function items(state = [], action) {
  switch (action.type) {
    case RETRIEVE_POSTS:
      return action.items;
    default:
      return state;
  }
}

export function addPost(state = {}, action) {
  switch (action.type) {
    case CREATE_POST:
      return action.item;
    default:
      return state;
  }
}

export function updatePost(state = {}, action) {
  switch (action.type) {
    case UPDATE_POST:
      return action.item;
    default:
      return state;
  }
}

export function deletePost(state = {}, action) {
  switch (action.type) {
    case REMOVE_POST:
      return action.item;
    default:
      return state;
  }
}