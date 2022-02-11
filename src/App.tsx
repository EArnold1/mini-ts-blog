import axios from 'axios';
import { FC, useContext } from 'react';
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
      console.log(state.posts);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <button onClick={getPosts}>Click me</button>
      <br />
    </div>
  );
};

export default App;
