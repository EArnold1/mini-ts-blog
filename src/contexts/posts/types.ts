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
}

export enum ActionTypes {
  GET_POSTS = 'GET_POSTS',
  GET_RECENT = 'GET_RECENT',
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
};
