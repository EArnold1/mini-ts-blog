import React, { ReactNode, createContext, useReducer } from 'react';
import { PostsModel, ActionValues } from '../types';
import PostsReducer from './postsReducer';

interface ProviderProps {
  children: ReactNode;
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
