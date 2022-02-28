/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { FC, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

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
      {!loading &&
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
                      }}
                    >
                      {post.title}
                    </Link>
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
                      <span>
                        <Moment format="YYYY/MM/DD">{post.publishedAt}</Moment>
                      </span>{' '}
                      | <span>12 min read</span>
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
