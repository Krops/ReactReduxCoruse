
//import loadash from 'lodash'

const RETRIEVE_POSTS = 'RETRIEVE_POSTS';
const ITEMS_HAS_ERRORED = 'ITEMS_HAS_ERRORED';
const ITEMS_IS_LOADING = 'ITEMS_IS_LOADING';
// const RETRIEVE_POST = 'RETRIEVE_POST';
// const CREATE_POST = 'CREATE_POST';
// const REMOVE_POST = 'REMOVE_POST';
// const UPDATE_POST = 'UPDATE_POST';

// export default (state={}, action) => {
//   switch(action.type) {
//     case RETRIEVE_POSTS:
//       return {...state, ...loadash.mapKeys(action.payload, 'id')};
//     case RETRIEVE_POST:
//       return {...state, [action.payload.id]: action.payload};
//     case CREATE_POST:
//       return {...state, [action.payload[0].id]: action.payload}[0];
//     case UPDATE_POST:
//       return {...state, [action.payload[0].id]: action.payload}[0];
//     case REMOVE_POST:
//       return loadash.omit(state, action.payload);

//     default:
//       return state;
//   }
// }





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