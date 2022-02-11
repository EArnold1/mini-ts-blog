import { FC, useContext, useEffect } from 'react';
import axios from 'axios';
import { PostsContext } from './contexts/posts/PostsState';
import { ActionTypes } from './contexts/types';

const App: FC = () => {
  useEffect(() => {
    getPosts();
  }, []);

  // The reason posts state is not used here is beacuse we bring in the state and dispatch
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
      alert('Server Error, try again');
    }
  };

  const { posts } = state;

  return (
    <div className="App">
      {posts.map((post) => (
        <div key={post.id}>
          <p> {post.title} </p>
          <p> {post.desc} </p>
        </div>
      ))}
      <br />
    </div>
  );
};

export default App;
