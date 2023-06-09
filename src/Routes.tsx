import React from 'react'
import {Routes, Route, Navigate} from "react-router-dom"

import Home from './Pages/Home';
import News from './Pages/News';
import Service from './Pages/Services';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/service" element={<Service />} />
      <Route path="/news" element={<News />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default MainRoutes