import { Fragment, FC, useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap';

const Articles: FC = () => {
  const location = useLocation();

  const [key, setKey] = useState<any>('');

  useEffect(() => {
    if (location.pathname !== '/articles') setKey(location.pathname);
  }, []);

  const navigate = useNavigate();

  return (
    <Fragment>
      <div className="home text-secondary rounded p-5">
        <section className="row my-5 text-center">
          <h1 className="my-5">ARTICLES</h1>
        </section>
      </div>
      <div className="container my-5">
        <Tabs
          defaultActiveKey="Design"
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => {
            setKey(k);
            navigate(`${k}`);
          }}
          className="nav-justified mb-3"
        >
          <Tab eventKey="/articles/design" title="Design" />
          <Tab eventKey="/articles/food" title="Food" />
          <Tab eventKey="/articles/market" title="Market" />
          <Tab eventKey="/articles/illustration" title="Illustration" />
        </Tabs>
        <br />
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Articles;
