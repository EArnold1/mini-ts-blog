import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BlogPostsState } from './contexts/blogposts/BlogPostState';
import { PostsState } from './contexts/posts/PostsState';

ReactDOM.render(
  <React.StrictMode>
    <PostsState>
      <BlogPostsState>
        <App />
      </BlogPostsState>
    </PostsState>
  </React.StrictMode>,
  document.getElementById('root')
);
