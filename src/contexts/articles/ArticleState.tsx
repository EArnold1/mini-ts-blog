import { ReactNode, useReducer } from 'react';
import { initialState } from './types';
import ArticleContext from './articleContext';
import articleReducer from './articleReducer';

interface ProviderProps {
  children: ReactNode;
}

const ArticleState = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(articleReducer, initialState);

  return (
    <ArticleContext.Provider value={{ state, dispatch }}>
      {children}
    </ArticleContext.Provider>
  );
};

export { ArticleState, ArticleContext };
