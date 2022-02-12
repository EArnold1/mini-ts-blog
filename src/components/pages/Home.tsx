/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, Fragment } from 'react';
import Section1 from './Section1';

const Home: FC = () => {
  return (
    <Fragment>
      <div
        className="hero-wrap"
        style={{
          backgroundImage: 'url(https://bit.ly/3JmAFKS)',
        }}
        data-stellar-background-ratio="0.5"
      >
        {/* <div className="overlay"></div> */}
        <div className="container">
          <div
            className="row no-gutters slider-text js-fullheight align-items-center justify-content-start"
            data-scrollax-parent="true"
          >
            <div className="col-md-12 ftco-animate ss">
              <h2 className="subheading">Hello! Welcome to</h2>
              <h1 className="mb-md-0 mb-4">Readit blog</h1>
              <div className="row">
                <div className="col-md-7">
                  <div className="text">
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.
                    </p>
                    <div className="mouse">
                      <a href="#" className="mouse-icon">
                        <div className="mouse-wheel">
                          <span className="ion-ios-arrow-round-down" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Section1 />
    </Fragment>
  );
};

export default Home;
