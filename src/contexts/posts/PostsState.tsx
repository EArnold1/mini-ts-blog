import { ReactNode, useReducer } from 'react';
import { initialState } from './types';
import PostsContext from './postsContext';
import PostsReducer from './postsReducer';

interface ProviderProps {
  children: ReactNode;
}

const PostsState = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(PostsReducer, initialState);

  return (
    <PostsContext.Provider value={{ state, dispatch }}>
      {children}
    </PostsContext.Provider>
  );
};

export { PostsState, PostsContext };
