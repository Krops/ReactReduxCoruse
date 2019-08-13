import axios from 'axios';

const RETRIEVE_POSTS = 'RETRIEVE_POSTS';
const ITEMS_HAS_ERRORED = 'ITEMS_HAS_ERRORED';
const ITEMS_IS_LOADING = 'ITEMS_IS_LOADING';

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