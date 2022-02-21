import { FC, Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/layout/Navbar';
import Footer from './components/pages/FooterSection';
import Blog from './components/pages/Blog';
import Landing from './components/pages/Landing';
import Contact from './components/pages/Contact';
import Single from './components/pages/SinglePost';
import BlogPosts from './components/blog/BlogPosts';

const App: FC = () => {
  return (
    <Router>
      <Fragment>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/posts" element={<Blog />} />
          <Route path="/single" element={<Single />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/posts" element={<BlogPosts />} />
        </Routes>
        <Footer />
      </Fragment>
    </Router>
  );
};

export default App;
