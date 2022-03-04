/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, Fragment, useContext } from 'react';
import Home from './Header';
import PostsContext from '../../contexts/posts/postsContext';
import PostsItems from './PostsItems';

const Landing: FC = () => {
  const { state } = useContext(PostsContext);

  const { posts, loading } = state;

  return (
    <Fragment>
      <Home />
      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <PostsItems loading={loading} posts={posts} />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Landing;
