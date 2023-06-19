
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages
import Home from "./pages/Home"
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Error from './pages/Error';

import './App.css';
import Navber from './navber/Navber';
function App() {
  return (
    <BrowserRouter>
      <Navber />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
