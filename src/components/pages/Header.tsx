/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, Fragment } from 'react';

const Home: FC = () => {
  return (
    <Fragment>
      <div className="home text-secondary rounded p-5">
        <div className="overlay" />
        <section className="row mt-5">
          <div className="col-sm-11">
            <h4>Hi, Welcome to</h4>
            <p className="display-1">Readit Blog</p>
            <br />
            <p className="lead">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Home;
