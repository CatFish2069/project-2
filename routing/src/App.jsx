import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Landing from './pages/landing';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
        <Route path='/home' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/landing' element={ <Landing /> } />
         </Routes>
      </Router>
    </div>
  );
};


export default App