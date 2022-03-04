import { FC, Fragment, useContext, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/layout/Navbar';
import Footer from './components/pages/FooterSection';
import Blog from './components/pages/Blog';
import Landing from './components/pages/Landing';
import Contact from './components/pages/Contact';
import Single from './components/pages/SinglePost';
import Articles from './components/pages/articles/Articles';
import Illustration from './components/pages/articles/Illustration';
import Design from './components/pages/articles/Design';
import Food from './components/pages/articles/Food';
import { ActionTypes } from './contexts/posts/types';
import PostsContext from './contexts/posts/postsContext';
import Market from './components/pages/articles/Market';
import BlogPosts from './components/blog/BlogPosts';

// import BlogPosts from './components/blog/BlogPosts';
// import CommentSection from './components/pages/CommentSection';

let apiKey: string | undefined;

if (process.env.NODE_ENV !== 'production') {
  apiKey = process.env.REACT_APP_APIKEY;
} else {
  apiKey = process.env.APIKEY;
}

const App: FC = () => {
  const { dispatch } = useContext(PostsContext);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`
      );
      dispatch({
        type: ActionTypes.GET_POSTS,
        payload: res.data.articles,
      });
    } catch (err) {
      alert('Server Error, try again');
    }
  };

  return (
    <Router>
      <Fragment>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="posts" element={<Blog />} />
          <Route path="news" element={<Single />} />
          <Route path="blogposts" element={<BlogPosts />} />
          <Route path="contact" element={<Contact />} />
          <Route path="articles" element={<Articles />}>
            <Route path="illustration" element={<Illustration />} />
            <Route path="design" element={<Design />} />
            <Route path="Market" element={<Market />} />
            <Route path="food" element={<Food />} />
          </Route>
        </Routes>
        <Footer />
      </Fragment>
    </Router>
  );
};

export default App;
