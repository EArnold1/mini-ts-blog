import axios from 'axios';
import Moment from 'react-moment';
import { Fragment, FC, useEffect, useContext } from 'react';
import ArticleContext from '../../../contexts/articles/articleContext';
import { ActionTypes } from '../../../contexts/articles/types';

const notFound: string = 'https://bit.ly/3Ir4euB';

const Illustration: FC = () => {
  const { state, dispatch } = useContext(ArticleContext);

  useEffect(() => {
    getArticle();
  }, []);

  const getArticle = async () => {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/everything?q=illustration&apiKey=${process.env.REACT_APP_APIKEY}`
      );
      dispatch({
        type: ActionTypes.GET_ILLUSTRATION,
        payload: res.data.articles,
      });
    } catch (err) {
      alert('Server Error, try again');
    }
  };

  const { loading, illustration } = state;

  return (
    <Fragment>
      <div className="mt-4 text-center">
        <h2>ILLUSTRATION</h2>
      </div>
      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {!loading &&
                illustration.map((val) => (
                  <div className="case" key={val.title}>
                    <div className="row">
                      <div className="col-md-6 col-lg-6 col-xl-8 d-flex">
                        <div
                          className="img w-100 mb-md-0 mb-3"
                          style={{
                            backgroundImage: `url(${
                              !val.author && !val.urlToImage
                                ? notFound
                                : val.urlToImage
                            })`,
                          }}
                        />
                      </div>
                      <div className="col-md-6 col-lg-6 col-xl-4 d-flex">
                        <div className="text w-100 pl-md-3">
                          <span className="subheading">{val.source.name}</span>
                          <h2>{val.title}</h2>
                          <div className="meta">
                            <p className="mb-0">
                              <span>
                                <Moment format="YYYY/MM/DD">
                                  {val.publishedAt}
                                </Moment>
                              </span>{' '}
                              |{' '}
                              <span>
                                {!val.author ? val.source.name : val.author}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Illustration;