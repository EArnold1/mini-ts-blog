import axios from 'axios';
import Moment from 'react-moment';
import { Fragment, FC, useEffect, useContext } from 'react';
import ArticleContext from '../../../contexts/articles/articleContext';
import { ActionTypes } from '../../../contexts/articles/types';
import Loader from '../../layout/Loader';

const notFound: string = 'https://ershemug.sirv.com/mini-ts-blog/notFound.jpg';

const Food: FC = () => {
  const { state, dispatch } = useContext(ArticleContext);

  useEffect(() => {
    getArticle();
  }, []);

  const getArticle = async () => {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/everything?q=food&apiKey=${process.env.REACT_APP_APIKEY}`
      );
      dispatch({
        type: ActionTypes.GET_FOOD,
        payload: res.data.articles,
      });
    } catch (err) {
      alert('Server Error, try again');
    }
  };

  const { food } = state;

  return (
    <Fragment>
      <div className="mt-4 text-center">
        <h2>FOOD</h2>
      </div>
      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {food[0].description === '' ? (
                <Loader />
              ) : (
                food.map((val) => (
                  <div className="case" key={val.title}>
                    <div className="row">
                      <div className="col-md-6 col-lg-6 col-xl-8 d-flex">
                        <div
                          className="img w-100 mb-md-0 mb-3"
                          style={{
                            backgroundImage: `url(${
                              val.author !== null && val.urlToImage !== null
                                ? val.urlToImage
                                : notFound
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
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Food;
