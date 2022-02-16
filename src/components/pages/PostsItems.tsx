/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { FC, Fragment, useContext, useEffect } from 'react';
import axios from 'axios';
import PostsContext from '../../contexts/posts/postsContext';
import { ActionTypes } from '../../contexts/types';

const PostsItems: FC = () => {
  const { state, dispatch } = useContext(PostsContext);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    try {
      const res = await axios.get(
        'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=80c1b3cdbf694d129c1afb2273e844f0'
      );
      dispatch({
        type: ActionTypes.GET_POSTS,
        payload: res.data,
      });
      console.log(state.posts);
    } catch (err) {
      alert('Server Error, try again');
    }
  };

  return (
    <Fragment>
      <div className="case">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-8 d-flex">
            <a
              href="blog-single.html"
              className="img w-100 mb-md-0 mb-3"
              style={{
                backgroundImage:
                  'url(images/ximage_1.jpg.pagespeed.ic.6nutUC1128.jpg)',
              }}
            />
          </div>
          <div className="col-md-6 col-lg-6 col-xl-4 d-flex">
            <div className="text w-100 pl-md-3">
              <span className="subheading">Illustration</span>
              <h2>
                <a href="blog-single.html">
                  Build a website in minutes with Adobe Templates
                </a>
              </h2>
              <ul className="media-social list-unstyled">
                <li className="ftco-animate">
                  <a href="#">
                    <span className="icon-twitter" />
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href="#">
                    <span className="icon-facebook" />
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href="#">
                    <span className="icon-instagram" />
                  </a>
                </li>
              </ul>
              <div className="meta">
                <p className="mb-0">
                  <a href="#">11/13/2019</a> |<a href="#">12 min read</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PostsItems;
