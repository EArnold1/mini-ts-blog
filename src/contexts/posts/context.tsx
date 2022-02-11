import { createContext, useReducer } from 'react';

interface State {
  posts: {}[];
}

const state: State = {
  posts: [],
};

function counterReducer(state: { payload: string }, action: string) {
  switch (action) {
    case 'GET_POSTS':
      return {
        posts: state.payload,
      };
  }
}
