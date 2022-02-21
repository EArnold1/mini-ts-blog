import { ReactNode, useReducer } from 'react';
import { initialState } from './types';
import BlogPostContext from './blogPostsContext';
import BlogPostReducer from './blogPostsReducer';

interface ProviderProps {
  children: ReactNode;
}

const PostsState = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(BlogPostReducer, initialState);

  return (
    <BlogPostContext.Provider value={{ state, dispatch }}>
      {children}
    </BlogPostContext.Provider>
  );
};

export { PostsState, BlogPostContext };
