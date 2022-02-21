import { createContext } from 'react';
import { BlogPostModel, initialState, ActionValues } from './types';

// CreateContext,
// Has two areguments, which consists of the "state" and "dispatch"
const PostsContext = createContext<{
  state: BlogPostModel;
  dispatch: React.Dispatch<ActionValues>;
}>({ state: initialState, dispatch: () => {} });

export default PostsContext;
