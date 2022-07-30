import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MenuContextProvider } from '../context/menuContext';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';
import { Home } from '../pages/Home';
import { PopularSites } from '../pages/PopularSites';
import { News } from '../pages/News';
import { Support } from '../pages/Support';
import { Term } from '../pages/Term';
import { SiteDetails } from '../pages/SiteDetails';

export const App = () => {
  return (
    <MenuContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='news' element={<News />} />
          <Route path='about' element={<About />} />
          <Route path='terms' element={<Term />} />
          <Route path='support' element={<Support />} />
          <Route path='contact' element={<Contact />} />
          <Route path='popular' element={<PopularSites />} />
          <Route path=':category/:id' element={<SiteDetails />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </MenuContextProvider>
  );
};
