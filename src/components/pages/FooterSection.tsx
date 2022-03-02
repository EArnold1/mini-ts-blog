/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, Fragment, useContext } from 'react';
import PostsContext from '../../contexts/posts/postsContext';
import Loader from '../layout/Loader';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const FooterSection: FC = () => {
  const { state } = useContext(PostsContext);

  const { loading, posts } = state;

  return (
    <Fragment>
      <footer className="ftco-footer ftco-bg-dark ftco-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="logo">
                  <a href="#">
                    Read<span>it</span>.
                  </a>
                </h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">latest News</h2>
                {loading ? (
                  <Loader />
                ) : (
                  <div className="block-21 d-flex mb-4">
                    <Link
                      to="news"
                      state={{
                        content: posts[0].content,
                        img: posts[0].urlToImage,
                        title: posts[0].title,
                        desc: posts[0].description,
                        author: posts[0].author,
                        loading,
                      }}
                      className="img mr-4 rounded"
                      style={{
                        backgroundImage: `url(${posts[0].urlToImage})`,
                      }}
                    />
                    <div className="text d-md-none d-lg-block">
                      <Link
                        to="news"
                        state={{
                          content: posts[0].content,
                          img: posts[0].urlToImage,
                          title: posts[0].title,
                          desc: posts[0].description,
                          author: posts[0].author,
                          loading,
                        }}
                      >
                        <h3 className="heading">
                          <p>{posts[0].title}</p>
                        </h3>
                        <div className="meta">
                          <div>
                            <Moment format="YYYY/MM/DD">
                              {posts[0].publishedAt}
                            </Moment>
                          </div>
                          <div>
                            <p>{posts[0].author}</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget ml-md-5 mb-4">
                <h2 className="ftco-heading-2">Information</h2>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/" className="d-block py-1">
                      <span className="ion-ios-arrow-forward mr-3" />
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="about" className="d-block py-1">
                      <span className="ion-ios-arrow-forward mr-3" />
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="articles" className="d-block py-1">
                      <span className="ion-ios-arrow-forward mr-3" />
                      Articles
                    </Link>
                  </li>
                  <li>
                    <Link to="contact" className="d-block py-1">
                      <span className="ion-ios-arrow-forward mr-3" />
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Question?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li>
                      <span className="icon icon-map-marker" />
                      <span className="text">
                        203 Fake St. Mountain View, San Francisco, California,
                        USA
                      </span>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon icon-phone" />
                        <span className="text">+2 392 3929 210</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon icon-envelope" />
                        <span className="text">
                          <span
                            className="__cf_email__"
                            data-cfemail="5f363139301f26302a2d3b30323e3631713c3032"
                          >
                            Email
                          </span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                Copyright © All rights reserved | This template is made with{' '}
                <i className="icon-heart color-danger" aria-hidden="true" /> by{' '}
                <a
                  href="../../../external.html?link=https://colorlib.com/"
                  target="_blank"
                >
                  Colorlib
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default FooterSection;
