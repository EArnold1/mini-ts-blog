import React, { ReactNode, createContext, useReducer } from 'react';
import PostsReducer from './postsReducer';
import { PostsModel } from '../types';

interface ProviderProps {
  children: ReactNode;
}

enum ActionTypes {
  GET_POSTS = 'GET_POSTS',
}

interface ActionValues {
  type: ActionTypes;
  payload: [];
}

const initialState: PostsModel = {
  posts: [],
};

// CreateContext,
// Has two areguments, which consists of the "state" and "dispatch"
const PostsContext = createContext<{
  state: PostsModel;
  dispatch: React.Dispatch<ActionValues>;
}>({ state: initialState, dispatch: () => {} });

const PostsState = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(PostsReducer, initialState);

  return (
    <PostsContext.Provider value={{ state, dispatch }}>
      {children}
    </PostsContext.Provider>
  );
};

export { PostsState, PostsContext };
