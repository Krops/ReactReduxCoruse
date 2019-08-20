import { createSelector } from 'reselect'
import _ from 'lodash'
export const getPostsSelector = state => {
    return state.items;
}

export const getPropsSelector = (state, props) => {
    return _.filter(state.items, function (item) {
        return item.id == props.match.params.postId;
    });
}