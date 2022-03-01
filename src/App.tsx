import { FC, Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/layout/Navbar';
import Footer from './components/pages/FooterSection';
import Blog from './components/pages/Blog';
import Landing from './components/pages/Landing';
import Contact from './components/pages/Contact';
import Single from './components/pages/SinglePost';
import Articles from './components/pages/articles/Articles';
import Illustration from './components/pages/articles/Illustration';
import Design from './components/pages/articles/Design';
import Marketing from './components/pages/articles/Marketing';
import Application from './components/pages/articles/Application';
// import BlogPosts from './components/blog/BlogPosts';
// import CommentSection from './components/pages/CommentSection';

const App: FC = () => {
  return (
    <Router>
      <Fragment>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="posts" element={<Blog />} />
          <Route path="news" element={<Single />} />
          <Route path="contact" element={<Contact />} />
          <Route path="articles" element={<Articles />}>
            <Route path="illustration" element={<Illustration />} />
            <Route path="design" element={<Design />} />
            <Route path="marketing" element={<Marketing />} />
            <Route path="application" element={<Application />} />
          </Route>
        </Routes>
        <Footer />
      </Fragment>
    </Router>
  );
};

export default App;
