import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MenuContextProvider } from '../context/menuContext';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';
import { Home } from '../pages/Home';
import { PopularSites } from '../pages/PopularSites';
import { Category } from '../pages/Category';
import { News } from '../pages/News';
import { Support } from '../pages/Support';
import { Term } from '../pages/Term';
import { SiteDetails } from '../pages/SiteDetails';
import { Search } from '../pages/Search';
import { Results } from '../pages/Results';
import { Reviews } from '../pages/Reviews';
import { Photos } from '../pages/Photos';

export const App = () => {
  return (
    <MenuContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:category/:id' element={<SiteDetails />} />
          <Route path='/:category/:id/reviews' element={<Reviews />} />
          <Route path='/:category/:id/photos' element={<Photos />} />
          <Route path='/news' element={<News />} />
          <Route path='/news/:id' element={<News />} />
          <Route path='/popular' element={<PopularSites />} />
          <Route path='/popular/:id' element={<PopularSites />} />
          <Route path='/category' element={<Category />} />
          <Route path='/category/:id' element={<Category />} />
          <Route path='/results' element={<Results />} />
          <Route path='/results/:id' element={<Results />} />
          <Route path='/results/:category' element={<Results />} />
          <Route path='/results/:category/:id' element={<Results />} />
          <Route path='/search' element={<Search />} />
          <Route path='/about' element={<About />} />
          <Route path='/terms' element={<Term />} />
          <Route path='/support' element={<Support />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </MenuContextProvider>
  );
};
