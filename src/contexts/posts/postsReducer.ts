import { PostsModel } from '../types';

enum ActionTypes {
  GET_POSTS = 'GET_POSTS',
}

interface ActionValues {
  type: ActionTypes;
  payload: [];
}

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state: PostsModel, action: ActionValues) => {
  switch (action.type) {
    case ActionTypes.GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
  }
};
