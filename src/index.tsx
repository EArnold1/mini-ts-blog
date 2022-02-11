import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { PostsState } from './contexts/posts/PostsState';

ReactDOM.render(
  <React.StrictMode>
    <PostsState>
      <App />
    </PostsState>
  </React.StrictMode>,
  document.getElementById('root')
);
