/////////////////////////////// BLOG-POSTS TYPES

export interface BlogPostModel {
  blogposts: [
    {
      publishedAt: string;
      author: string;
      urlToImage: string;
      title: string;
      desc: string;
      content: string;
      id: number | null;
    }
  ];
  loading: boolean;
}

export enum ActionTypes {
  GET_POSTS_B = 'GET_POSTS_B',
  DELETE_POST_B = 'DELETE_POST_B',
  ADD_POST_B = 'ADD_POST_B',
}

export interface ActionValues {
  type: ActionTypes;
  payload: [
    {
      title: '';
      author: '';
      content: '';
      desc: '';
      urlToImage: '';
      publishedAt: '';
      id: null;
    }
  ];
}

export const initialState: BlogPostModel = {
  blogposts: [
    {
      title: '',
      author: '',
      content: '',
      desc: '',
      urlToImage: '',
      publishedAt: '',
      id: null,
    },
  ],
  loading: true,
};
