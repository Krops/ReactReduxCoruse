import axios from 'axios';
import loadash from 'lodash'

const RETRIEVE_POSTS = 'RETRIEVE_POSTS';
const RETRIEVE_POST = 'RETRIEVE_POST';
const CREATE_POST = 'CREATE_POST';
const REMOVE_POST = 'REMOVE_POST';
const UPDATE_POST = 'UPDATE_POST';

export default (state={}, action) => {
  switch(action.type) {
    case RETRIEVE_POSTS:
      return {...state, ...loadash.mapKeys(action.payload, 'id')};
    case RETRIEVE_POST:
      return {...state, [action.payload.id]: action.payload};
    case CREATE_POST:
      return {...state, [action.payload[0].id]: action.payload}[0];
    case UPDATE_POST:
      return {...state, [action.payload[0].id]: action.payload}[0];
    case REMOVE_POST:
      return loadash.omit(state, action.payload);

    default:
      return state;
  }
}


export const getPosts = () => async dispatch => {
  const response = await axios.get('/api/posts');
  dispatch({ type: RETRIEVE_POSTS, payload: response.data});
};


// // ACTION CREATERS
// const retrieve = (posts) => ({
//   type: RETRIEVE_POSTS,
//   payload: posts
// });

// const retrieveOne = (post) => ({
//   type: RETRIEVE_POST,
//   payload: post
// });

// const create = (post) => ({
//   type: CREATE_POST,
//   payload: post.data
// });


// // THUNKS
// export const getPosts = () =>
//   dispatch =>
//     axios.get('/api/posts')
//     .then((posts) => dispatch(retrieve(posts.data)))
//     .catch((err) => console.error(err.message));

// export const retrievePost = (id) =>
//   dispatch =>
//     axios.get(`./api/posts/${id}`)
//     .then((post) => dispatch(retrieveOne(post.data)))
//     .catch((err) => console.error(err.message));

// export const createPost = (post) =>
//   dispatch =>
//     axios.post('/api/posts', post)
//       .then((post) => dispatch(create(post)))
//       .catch((err) => console.error(err.message));

// export const updatePost = (post) =>
// dispatch =>
//   axios.put(`/api/posts/${post.id}`, post)
//     .then((statusObj) => {
//       if (statusObj.status === 200) {
//         dispatch(retrievePosts());
//         dispatch(retrievePost(post.id));
//       }
//     })
//     .catch((err) => {
//       console.error(err.message)
//     });

// export const removePost = (postId) =>
//   dispatch =>
//     axios.delete(`/api/posts/${postId}`)
//       .then((statusObj) => {
//         if (statusObj.status === 200) {
//           dispatch(retrievePosts());
//           dispatch(retrievePost(postId));
//         }
//       })
//       .catch((err) => {
//         console.error(err.message);
//       });