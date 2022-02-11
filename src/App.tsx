import axios from 'axios';
import React, { FC, useContext } from 'react';
import { PostsContext } from './contexts/posts/PostsState';

enum ActionTypes {
  GET_POSTS = 'GET_POSTS',
}

const App: FC = () => {
  const { state, dispatch } = useContext(PostsContext);

  const getPosts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/posts');
      dispatch({
        type: ActionTypes.GET_POSTS,
        payload: res.data,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <button onClick={getPosts}>Click me</button>
    </div>
  );
};

export default App;
