import {REDIRECT_ON_SUCCESS, RETRIEVE_POSTS, ITEMS_HAS_ERRORED,ITEMS_IS_LOADING,CREATE_POST, UPDATE_POST, REMOVE_POST, IS_AUTHORIZED} from './types'

export function redirectToHome(bool) {
    return {
      type: REDIRECT_ON_SUCCESS,
      redirectOnSuccess: bool
    };
  }
  
  export function itemsFetchDataSuccess(payload) {
    return {
      type: RETRIEVE_POSTS,
      payload
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
  
  export function postAdded(payload) {
    return {
      type: CREATE_POST,
      payload
    };
  }
  export function postUpdated(payload) {
    return {
      type: UPDATE_POST,
      payload
    };
  }
  
  export function postDeleted(payload) {
    return {
      type: REMOVE_POST,
      payload
    };
  }

  export function loginAction(bool) {
    return {
      type: IS_AUTHORIZED,
      isAuthorized: bool
    };
  }