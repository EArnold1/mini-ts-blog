import { PostsModel, ActionTypes, ActionValues } from '../types';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state: PostsModel, action: ActionValues) => {
  switch (action.type) {
    case ActionTypes.GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
