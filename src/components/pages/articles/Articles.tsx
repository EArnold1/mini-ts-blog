import { Fragment, FC, useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap';

const Articles: FC = () => {
  const [key, setKey] = useState<any>('design');
  const navigate = useNavigate();
  return (
    <Fragment>
      <div className="home text-secondary rounded p-5">
        <section className="row my-5 text-center">
          <h1 className="my-5">ARTICLES</h1>
        </section>
      </div>
      <div className="container my-5">
        {/* <ul className="nav nav-tabs nav-justified">
          <li className="nav-item">
            <Link className="nav-link active" to="market">
              Market
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="design">
              Design
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="food">
              Food
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="illustration">
              Illustration
            </Link>
          </li>
        </ul> */}
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
          <Tab eventKey="design" title="Design" />
          <Tab eventKey="food" title="Food" />
          <Tab eventKey="market" title="Market" />
          <Tab eventKey="illustration" title="Illustration" />
        </Tabs>
        <br />
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Articles;
