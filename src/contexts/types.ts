export const GET_POSTS: string = 'GET_POSTS';

export interface PostsModel {
  posts: [{ title: string; id: number | null; desc: string }];
}

export enum ActionTypes {
  GET_POSTS = 'GET_POSTS',
}

export interface ActionValues {
  type: ActionTypes.GET_POSTS;
  payload: [
    {
      title: '';
      id: null;
      desc: '';
    }
  ];
}

export const initialState: PostsModel = {
  posts: [
    {
      title: '',
      id: null,
      desc: '',
    },
  ],
};
