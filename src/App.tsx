import { Route, Routes } from 'react-router-dom';

import { HomePage, ContactPage, BlogPage, BlogDetailsPage } from './pages';

function App() {
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
