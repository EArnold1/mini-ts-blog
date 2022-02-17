/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, Fragment, useEffect, useContext } from 'react';
import Home from './Header';
import axios from 'axios';
import PostsContext from '../../contexts/posts/postsContext';
import { ActionTypes } from '../../contexts/types';
import PostsItems from './PostsItems';

const Landing: FC = () => {
  const { state, dispatch } = useContext(PostsContext);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${process.env.REACT_APP_APIKEY}`
      );
      dispatch({
        type: ActionTypes.GET_POSTS,
        payload: res.data.articles,
      });
    } catch (err) {
      alert('Server Error, try again');
    }
  };

  const { posts, loading } = state;

  return (
    <Fragment>
      <Home />
      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <PostsItems posts={posts} loading={loading} />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Landing;
