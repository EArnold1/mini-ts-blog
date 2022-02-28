/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import { FC, Fragment, useState, useEffect, useContext } from 'react';
import { Link, useLocation, useNavigate, Outlet } from 'react-router-dom';
import PostsContext from '../../contexts/posts/postsContext';
import Moment from 'react-moment';
import axios from 'axios';
import { ActionTypes } from '../../contexts/posts/types';
// import CommentSection from './CommentSection';

interface ValuesType {
  content: string;
  img: string;
  title: string;
  desc: string;
  author: string;
  loading: boolean;
}

const Single: FC = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(PostsContext);

  const getRecentPosts = async (): Promise<void> => {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?sources=abc-news&pageSize=5&apiKey=${process.env.REACT_APP_APIKEY}`
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
    loading: true,
  });

  const values = useLocation().state as ValuesType; // Type casting

  useEffect(() => {
    getRecentPosts();
    if (values !== null) {
      const { content, img, title, desc, author, loading } = values;

      setPostState({ content, img, title, desc, author, loading });
    } else {
      return navigate('/');
      //else redirect back to home
    }
  }, []);

  return (
    <Fragment>
      {postState.loading ? (
        <p>Hi</p>
      ) : (
        <>
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
                  <h2 className="mb-3">
                    {postState.title.toLocaleUpperCase()}
                  </h2>
                  <p className="text-content">{postState.desc}</p>

                  <div className="tag-widget post-tag-container mb-5 mt-5">
                    <div className="tagcloud">
                      <a href="#" className="tag-cloud-link">
                        Life
                      </a>
                      <a href="#" className="tag-cloud-link">
                        Sport
                      </a>
                      <a href="#" className="tag-cloud-link">
                        Tech
                      </a>
                      <a href="#" className="tag-cloud-link">
                        Travel
                      </a>
                    </div>
                  </div>
                  <div className="about-author d-flex bg-light p-4">
                    <div className="bio mr-5">
                      <img
                        src="images/xperson_1.jpg.pagespeed.ic.8e2vi2ER3S.jpg"
                        alt="Image placeholder"
                        className="img-fluid mb-4"
                      />
                    </div>
                    <div className="desc">
                      <h3>{postState.author.toLocaleUpperCase()}</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ducimus itaque, autem necessitatibus voluptate
                        quod mollitia delectus aut, sunt placeat nam vero culpa
                        sapiente consectetur similique, inventore eos fugit
                        cupiditate numquam!
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
                          Illustration{' '}
                          <span className="ion-ios-arrow-forward" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/articles/branding">
                          Branding <span className="ion-ios-arrow-forward" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/articles/application">
                          Application <span className="ion-ios-arrow-forward" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/articles/design">
                          Design <span className="ion-ios-arrow-forward" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/articles/marketing">
                          Marketing <span className="ion-ios-arrow-forward" />
                        </Link>
                      </li>
                    </div>
                  </div>
                  <div className="sidebar-box">
                    <h3>Recent Blog</h3>
                    {recentPosts.map((recentPost) => (
                      <div
                        className="block-21 d-flex mb-4"
                        key={recentPost.title}
                      >
                        <a
                          className="blog-img mr-4"
                          style={{
                            backgroundImage: `url(${recentPost.urlToImage})`,
                          }}
                        />
                        <div className="text">
                          <h3 className="heading">
                            <a href="#">{recentPost.title}</a>
                          </h3>
                          <div className="meta">
                            <div>
                              <a href="#">
                                <span className="icon-calendar" />{' '}
                                <Moment format="YYYY/MM/DD">
                                  {recentPost.publishedAt}
                                </Moment>
                              </a>
                            </div>
                            <div>
                              <a href="#">
                                <span className="icon-person" /> Admin
                              </a>
                            </div>
                            {/* <div>
                          <a href="#">
                            <span className="icon-chat" /> 19
                          </a>
                        </div> */}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
      <Outlet />
    </Fragment>
  );
};

export default Single;
