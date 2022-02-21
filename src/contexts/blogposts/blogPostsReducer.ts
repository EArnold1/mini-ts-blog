import { BlogPostModel, ActionTypes, ActionValues } from './types';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state: BlogPostModel, action: ActionValues) => {
  switch (action.type) {
    case ActionTypes.GET_POSTS_B:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case ActionTypes.ADD_POST_B:
      return {
        ...state,
        blogPosts: [action.payload, ...state.blogposts],
      };
    case ActionTypes.DELETE_POST_B:
      return {
        ...state,
        blogPosts: state.blogposts.filter(
          (post) => post.id !== +action.payload
        ),
      };
    default:
      return state;
  }
};
