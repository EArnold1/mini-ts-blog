/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import { FC, Fragment, useState, useEffect, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PostsContext from '../../contexts/posts/postsContext';
import Moment from 'react-moment';
import axios from 'axios';
import { ActionTypes } from '../../contexts/posts/types';
import Loader from '../layout/Loader';
// import CommentSection from './CommentSection';

const notFound: string = 'https://ershemug.sirv.com/mini-ts-blog/notFound.jpg';

interface ValuesType {
  content: string;
  img: string;
  title: string;
  desc: string;
  author: string;
  loading: boolean;
  url: string;
}

let apiKey: string | undefined;

if (process.env.NODE_ENV !== 'production') {
  apiKey = process.env.REACT_APP_APIKEY;
} else {
  apiKey = process.env.APIKEY;
}

const Single: FC = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(PostsContext);

  const getRecentPosts = async (): Promise<void> => {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?sources=abc-news&pageSize=5&apiKey=${apiKey}`
      );
      dispatch({
        type: ActionTypes.GET_RECENT,
        payload: res.data.articles,
      });
    } catch (err) {
      alert('Server Error, try again');
    }
  };

  const { recentPosts } = state;

  const [postState, setPostState] = useState<ValuesType>({
    content: '',
    img: '',
    title: '',
    desc: '',
    author: '',
    url: '',
    loading: true,
  });

  const values = useLocation().state as ValuesType; // Type casting

  useEffect(() => {
    getRecentPosts();
    if (values !== null) {
      const { content, img, title, desc, author, loading, url } = values;

      setPostState({ content, img, title, desc, author, loading, url });
    } else {
      return navigate('/');
      //else redirect back to home
    }
  }, []);

  return (
    <Fragment>
      <div className="home text-secondary rounded p-5">
        <section className="row my-5 text-center">
          <h1 className="my-5">SINGLE POST</h1>
          <p className="lead my-2">{postState.title}</p>
        </section>
      </div>
      <section className="ftco-section ftco-degree-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <p className="mb-5">
                <img
                  src={`${postState.img}`}
                  alt="Image"
                  className="img-fluid"
                />
              </p>
              <h2 className="mb-3">{postState.title.toLocaleUpperCase()}</h2>
              <br />
              <p className="text-content">{postState.desc}</p>
              <a
                href={`${postState.url}`}
                rel="noreferrer"
                target="_blank"
                className="btn btn-warning text-primary my-2"
              >
                Read More
              </a>
              <div className="about-author d-flex bg-light p-4">
                <div className="bio mr-5">
                  <img
                    src={`https://ershemug.sirv.com/mini-ts-blog/reporter.jpg`}
                    alt="Image placeholder"
                    className="img-fluid mb-4 rounded"
                  />
                </div>
                <div className="desc">
                  <h3>{postState.author.toLocaleUpperCase()}</h3>
                  <p>
                    <span className="lead"> {postState.title} </span>-{' '}
                    {postState.desc}
                  </p>
                </div>
              </div>
              {/* <CommentSection /> */}
            </div>
            <div className="col-lg-4 sidebar pl-lg-5">
              <div className="sidebar-box">
                <div className="categories">
                  <h3>Categories</h3>
                  <li>
                    <Link to="/articles/illustration">
                      Illustration <span className="ion-ios-arrow-forward" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/articles/food">
                      Food <span className="ion-ios-arrow-forward" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/articles/design">
                      Design <span className="ion-ios-arrow-forward" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/articles/market">
                      Market <span className="ion-ios-arrow-forward" />
                    </Link>
                  </li>
                </div>
              </div>
              <div className="sidebar-box">
                <h3>Recent Blog</h3>
                {recentPosts[0].author === '' ? (
                  <Loader />
                ) : (
                  recentPosts.map((recentPost) => (
                    <div
                      className="block-21 d-flex mb-4"
                      key={recentPost.title}
                    >
                      <a
                        href={`${recentPost.url}`}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <img
                          className="blog-img mr-4"
                          style={{
                            backgroundImage: `url(${
                              recentPost.urlToImage !== 'null' ||
                              recentPost.urlToImage !== null
                                ? recentPost.urlToImage
                                : notFound
                            })`,
                          }}
                        />
                        <div className="text">
                          <h3 className="heading">{recentPost.title}</h3>
                          <div className="meta">
                            <div>
                              <span className="icon-calendar" />{' '}
                              <Moment format="YYYY/MM/DD">
                                {recentPost.publishedAt}
                              </Moment>
                            </div>
                            <div>
                              <span className="icon-person" />{' '}
                              {recentPost.source.name}
                            </div>
                            {/* <div>
                          <a href="#">
                            <span className="icon-chat" /> 19
                          </a>
                        </div> */}
                          </div>
                        </div>
                      </a>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Single;
