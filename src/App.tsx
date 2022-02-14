import { FC, useContext, useEffect, Fragment } from 'react';
import axios from 'axios';
import './App.css';
import { PostsContext } from './contexts/posts/PostsState';
import { ActionTypes } from './contexts/types';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/layout/Navbar';
import Home from './components/pages/Home';
import Footer from './components/pages/FooterSection';

const App: FC = () => {
  // The reason posts state is not used here is beacuse we bring in the state and dispatch
  const { state, dispatch } = useContext(PostsContext);

  useEffect(() => {
    getPosts();
  }, []);

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
    <Router>
      <Fragment>
        <NavbarComponent />
        <Routes>
          <Route index element={<Home />} />
        </Routes>
        <Footer />
      </Fragment>
    </Router>
  );
};

export default App;
