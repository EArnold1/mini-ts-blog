import { createContext } from 'react';
import { PostsModel, initialState, ActionValues } from '../types';

// CreateContext,
// Has two areguments, which consists of the "state" and "dispatch"
const PostsContext = createContext<{
  state: PostsModel;
  dispatch: React.Dispatch<ActionValues>;
}>({ state: initialState, dispatch: () => {} });

export default PostsContext;
