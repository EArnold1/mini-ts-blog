/////////////////////////////// BLOG-POSTS TYPES

export interface ArticleModel {
  illustration: [
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
  marketing: [
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
  GET_ILLUSTRATION = 'GET_ILLUSTRATION',
  GET_MARKETING = 'GET_MARKETING',
}

export interface ActionValues {
  type: ActionTypes;
  payload: [
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

export const initialState: ArticleModel = {
  illustration: [
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
  marketing: [
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
};
