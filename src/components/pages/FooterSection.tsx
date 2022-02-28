/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, Fragment } from 'react';

const FooterSection: FC = () => {
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
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
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
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">latest News</h2>
                <div className="block-21 d-flex mb-4">
                  <a
                    className="img mr-4 rounded"
                    style={{
                      backgroundImage:
                        'url(/images/ximage_1.jpg.pagespeed.ic.6nutUC1128.jpg)',
                    }}
                  />
                  <div className="text">
                    <h3 className="heading">
                      <a href="#">
                        Even the all-powerful Pointing has no control about
                      </a>
                    </h3>
                    <div className="meta">
                      <div>
                        <a href="#"> Oct. 16, 2019</a>
                      </div>
                      <div>
                        <a href="#"> Admin</a>
                      </div>
                      <div>
                        <a href="#"> 19</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block-21 d-flex mb-4">
                  <a
                    className="img mr-4 rounded"
                    style={{
                      backgroundImage:
                        'url(/images/ximage_2.jpg.pagespeed.ic.HhFRahl7c7.jpg)',
                    }}
                  />
                  <div className="text">
                    <h3 className="heading">
                      <a href="#">
                        Even the all-powerful Pointing has no control about
                      </a>
                    </h3>
                    <div className="meta">
                      <div>
                        <a href="#"> Oct. 16, 2019</a>
                      </div>
                      <div>
                        <a href="#"> Admin</a>
                      </div>
                      <div>
                        <a href="#"> 19</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget ml-md-5 mb-4">
                <h2 className="ftco-heading-2">Information</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="d-block py-1">
                      <span className="ion-ios-arrow-forward mr-3" />
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="d-block py-1">
                      <span className="ion-ios-arrow-forward mr-3" />
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="d-block py-1">
                      <span className="ion-ios-arrow-forward mr-3" />
                      Articles
                    </a>
                  </li>
                  <li>
                    <a href="#" className="d-block py-1">
                      <span className="ion-ios-arrow-forward mr-3" />
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
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
                            [email&nbsp;protected]
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
