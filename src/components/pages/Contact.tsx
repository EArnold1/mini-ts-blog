/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, Fragment } from 'react';

const Contact: FC = () => {
  return (
    <Fragment>
      <div className="home text-secondary rounded p-5">
        <section className="row my-5">
          <h1 className="my-5 text-center">CONTACT US</h1>
        </section>
      </div>
      <section className="ftco-section contact-section">
        <div className="container">
          <div className="row d-flex contact-info mb-5">
            <div className="col-md-12 mb-4">
              <h2 className="h3">Contact Information</h2>
            </div>
            <div className="w-100" />
            <div className="col-md-3">
              <p>
                <span>Address:</span> 198 West 21th Street, Suite 721 New York
                NY 10016
              </p>
            </div>
            <div className="col-md-3">
              <p>
                <span>Phone:</span>{' '}
                <a href="tel://1234567920">+ 1235 2355 98</a>
              </p>
            </div>
            <div className="col-md-3">
              <p>
                <span>Email:</span>{' '}
                <a href="../../../external.html?link=https://preview.colorlib.com/cdn-cgi/l/email-protection#3950575f567940564c4b4a504d5c175a5654">
                  <span
                    className="__cf_email__"
                    data-cfemail="9cf5f2faf3dce5f3e9eeeff5e8f9b2fff3f1"
                  >
                    [email&nbsp;protected]
                  </span>
                </a>
              </p>
            </div>
            <div className="col-md-3">
              <p>
                <span>Website</span> <a href="#">yoursite.com</a>
              </p>
            </div>
          </div>
          <div className="row block-9 no-gutters">
            <div className="col-lg-6 order-md-last d-flex">
              <form action="#" className="bg-light p-md-5 contact-form p-4">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    cols={30}
                    rows={7}
                    className="form-control"
                    placeholder="Message"
                    defaultValue={''}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    defaultValue="Send Message"
                    className="btn btn-primary py-3 px-5"
                  />
                </div>
              </form>
            </div>
            <div className="col-lg-6 d-flex">
              <div id="map" className="bg-white" />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Contact;
