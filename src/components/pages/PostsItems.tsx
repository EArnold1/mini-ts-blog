/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { FC, Fragment } from 'react';
import { PostsModel } from '../../contexts/types';
import Moment from 'react-moment';

const PostsItems: FC<PostsModel> = (props) => {
  const { posts } = props;

  return (
    <Fragment>
      {posts.map((post) => (
        <div className="case" key={post.title}>
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-8 d-flex">
              <a
                href="blog-single.html"
                className="img w-100 mb-md-0 mb-3"
                style={{
                  backgroundImage: `url(${post.urlToImage})`,
                }}
              />
            </div>
            <div className="col-md-6 col-lg-6 col-xl-4 d-flex">
              <div className="text w-100 pl-md-3">
                <span className="subheading">{post.source.name}</span>
                <h2>
                  <a href="blog-single.html">{post.title}</a>
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
                    <a href="#">
                      <Moment format="YYYY/MM/DD">{post.publishedAt}</Moment>
                    </a>{' '}
                    | <a href="#">12 min read</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default PostsItems;
