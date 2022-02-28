import { createContext } from 'react';
import { ArticleModel, initialState, ActionValues } from './types';

// CreateContext,
// Has two areguments, which consists of the "state" and "dispatch"
const ArticleContext = createContext<{
  state: ArticleModel;
  dispatch: React.Dispatch<ActionValues>;
}>({ state: initialState, dispatch: () => {} });

export default ArticleContext;
