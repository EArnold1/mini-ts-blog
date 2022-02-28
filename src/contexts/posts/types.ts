////////////////////////////// NEWS-POST TYPES

export interface PostsModel {
  posts: [
    {
      source: { id: string; name: string };
      author: string;
      title: string;
      description: string;
      urlToImage: string;
      publishedAt: string;
      content: string;
    }
  ];
  recentPosts: [
    {
      source: { id: string; name: string };
      author: string;
      title: string;
      description: string;
      urlToImage: string;
      publishedAt: string;
      content: string;
    }
  ];
  loading: boolean;
  singlePost: {
    content: string;
    img: string;
    title: string;
    desc: string;
    author: string;
  };
}

export enum ActionTypes {
  GET_POSTS = 'GET_POSTS',
  GET_RECENT = 'GET_RECENT',
  GET_SINGLE = 'GET_SINGLE',
}

export interface ActionValues {
  type: ActionTypes;
  payload:
    | [
        {
          source: {
            id: string;
            name: string;
          };
          author: string;
          content: string;
          publishedAt: string;
          title: string;
          urlToImage: string;
          description: string;
        }
      ];
}

export const initialState: PostsModel = {
  posts: [
    {
      source: {
        id: '',
        name: '',
      },
      author: '',
      content: '',
      publishedAt: '',
      title: '',
      urlToImage: '',
      description: '',
    },
  ],
  loading: true,
  recentPosts: [
    {
      source: {
        id: '',
        name: '',
      },
      author: '',
      content: '',
      publishedAt: '',
      title: '',
      urlToImage: '',
      description: '',
    },
  ],
  singlePost: {
    content: '',
    img: '',
    desc: '',
    title: '',
    author: '',
  },
};
