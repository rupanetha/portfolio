import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ReactGA from 'react-ga';

import { HomePage, ContactPage, BlogPage, BlogDetailsPage } from './pages';

const TRACKING_ID = 'UA-253360499-1'; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/blog' element={<BlogPage />} />
      <Route path='/blog/:slug' element={<BlogDetailsPage />} />
      <Route path='/contact' element={<ContactPage />} />
    </Routes>
  );
}

export default App;
