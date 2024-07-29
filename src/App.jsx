import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import VechicleListing from './Pages/VechicleListing';
import DealerLocation from './Pages/DealerLocation';
import GetApp from './Pages/GetApp';
import OurNews from './Pages/OurNews';
import Contact from './Pages/Contact';
import "./index.css";
import LogInSection from './Pages/LogInSection';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <>
      {/* BrowserRouter provides routing functionality for the application */}
      <BrowserRouter>
        {/* Routes define the available routes in the application */}
        <Routes>
          {/* Layout component wraps all the pages and provides common structure */}
          <Route path='/' element={<Layout />}>
            
            {/* Route for the home page */}
            <Route path='/' element={<Home />} />
            
            {/* Route for vehicle listing page */}
            <Route path='/vechileListing' element={<VechicleListing />} />
            
            {/* Route for dealer location page */}
            <Route path='/dealerLocation' element={<DealerLocation />} />
            
            {/* Route for the get app page */}
            <Route path='/getApp' element={<GetApp />} />
            
            {/* Route for news page */}
            <Route path='/ourNews' element={<OurNews />} />
            
            {/* Route for contact page */}
            <Route path='/contact' element={<Contact />} />
            
            {/* Route for login page */}
            <Route path='/loginUser' element={<LogInSection />} />
            
            {/* Route for sign-up page */}
            <Route path='/signup' element={<SignUp />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
