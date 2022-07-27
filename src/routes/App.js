import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MenuContextProvider } from "../context/menuContext";
import { Home } from "../pages/Home";
import { PopularSites } from "../pages/PopularSites";

export const App = () => {
  return (
    <MenuContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<PopularSites />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </MenuContextProvider>
  );
};
