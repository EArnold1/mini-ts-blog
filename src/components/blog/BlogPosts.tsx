import { Fragment, FC } from 'react';

const BlogPosts: FC = () => {
  return (
    <Fragment>
      <div className="home text-secondary rounded p-5">
        <section className="row my-5 text-center">
          <h1 className="my-5">CREATE ARTICLE</h1>
        </section>
      </div>
      <div className="container my-5">
        <form className="blogHome">
          <input
            className="form-control blogHome"
            type="text"
            name="title"
            // value={title}
            placeholder="Enter Title"
            // onChange={onChange}
          />
          <br />
        </form>
      </div>
    </Fragment>
  );
};

export default BlogPosts;
