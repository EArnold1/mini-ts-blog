/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { FC, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import Loader from '../layout/Loader';

interface PostsItemsModel {
  posts:
    | [
        {
          source: { id: string; name: string };
          author: string;
          title: string;
          description: string;
          urlToImage: string;
          publishedAt: string;
          content: string;
          url: string;
        }
      ]
    | [];
  loading: boolean;
}

const PostsItems: FC<PostsItemsModel> = (props) => {
  // The props passed is of type "PostsItemsModel"

  const { posts, loading } = props;

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        posts.map((post) => (
          <div className="case" key={post.title}>
            <div className="row">
              <div className="col-md-6 col-lg-6 col-xl-8 d-flex">
                <Link
                  to="news"
                  state={{
                    content: post.content,
                    img: post.urlToImage,
                    title: post.title,
                    desc: post.description,
                    author: post.author,
                    loading,
                    url: post.url,
                  }}
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
                    <Link
                      to="news"
                      state={{
                        content: post.content,
                        img: post.urlToImage,
                        title: post.title,
                        desc: post.description,
                        author: post.author,
                        loading,
                        url: post.url,
                      }}
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <br />
                  <div className="meta mt-5">
                    <p className="mb-0">
                      <span>
                        <Moment format="YYYY/MM/DD">{post.publishedAt}</Moment>
                      </span>{' '}
                      | <span>{post.source.name}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </Fragment>
  );
};

export default PostsItems;
