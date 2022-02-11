export const GET_POSTS: string = 'GET_POSTS';

export interface PostsModel {
  posts: {}[];
}

export enum ActionTypes {
  GET_POSTS = 'GET_POSTS',
}

export interface ActionValues {
  type: ActionTypes.GET_POSTS;
  payload: {}[];
}
