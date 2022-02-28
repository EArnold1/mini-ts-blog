import { Fragment, FC } from 'react';
import { Outlet } from 'react-router-dom';

const Articles: FC = () => {
  return (
    <Fragment>
      <div className="home text-secondary rounded p-5">
        <section className="row my-5 text-center">
          <h1 className="my-5">ARTICLES</h1>
        </section>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Articles;
