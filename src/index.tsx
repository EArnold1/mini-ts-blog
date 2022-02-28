import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BlogPostsState } from './contexts/blogposts/BlogPostState';
import { PostsState } from './contexts/posts/PostsState';
import { ArticleState } from './contexts/articles/ArticleState';

ReactDOM.render(
  <React.StrictMode>
    <PostsState>
      <BlogPostsState>
        <ArticleState>
          <App />
        </ArticleState>
      </BlogPostsState>
    </PostsState>
  </React.StrictMode>,
  document.getElementById('root')
);
