import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/layout'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Services from './pages/Services/Services'
import Contact from './pages/Contact/Contact'
import CustomerStory from './pages/Stories/CustomerStory'
import { div } from 'motion/react-client'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import CommercialDesign from './services/commercialdesign.jsx'
import ResidentialDesign from './services/residentialdesign.jsx'
import OfficeInteriors from './services/Officeinteriors.jsx'
import CustomFurniture from './services/Customfurniture.jsx'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    
    <Layout>
          <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story/:id" element={<CustomerStory />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/services/residential-design' element={<ResidentialDesign/>}/>
          <Route path='/services/commercial-design' element={<CommercialDesign/>}/>
         <Route path='/services/office-interiors' element={<OfficeInteriors/>}/>
         <Route path='/services/custom-furniture' element={<CustomFurniture/>}/>

        
      </Routes>
    </Layout>
  )
}

export default App