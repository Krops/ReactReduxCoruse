import { createSelector } from 'reselect'
export const getPostsSelector = state => {
    return state.items;
}

export const getPropsSelector = (state, props) => {
    console.log(state.items)
    console.log(props.match.params.postId)
    return state.items.filter(item => item.id == props.match.params.postId);
}

export const getOnePostSelector = () => createSelector(
    getPostsSelector,
    (items) => { return items.filter(item => item.id === 1)}
  )