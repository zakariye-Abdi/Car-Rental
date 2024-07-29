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
      {/* This component enables the routing for the entire app */}
      <BrowserRouter>
        {/* Routes define the available routes and their components */}
        {/* Each Route specifies a path and the component that should render when that path is matched */}
        <Routes>
          {/* Layout component wraps all the routes and provides a common structure like header, footer, etc. */}
          {/* This means that Layout will be rendered for all nested routes */}
          <Route path='/' element={<Layout />}>
            
            {/* Route for the home page */}
            {/* When the path is '/', the Home component will be rendered */}
            <Route path='/' element={<Home />} />
            
            {/* Route for the vehicle listing page */}
            {/* When the path is '/vechileListing', the VechicleListing component will be rendered */}
            <Route path='/vechileListing' element={<VechicleListing />} />
            
            {/* Route for the dealer location page */}
            {/* When the path is '/dealerLocation', the DealerLocation component will be rendered */}
            <Route path='/dealerLocation' element={<DealerLocation />} />
            
            {/* Route for the get app page */}
            {/* When the path is '/getApp', the GetApp component will be rendered */}
            <Route path='/getApp' element={<GetApp />} />
            
            {/* Route for the news page */}
            {/* When the path is '/ourNews', the OurNews component will be rendered */}
            <Route path='/ourNews' element={<OurNews />} />
            
            {/* Route for the contact page */}
            {/* When the path is '/contact', the Contact component will be rendered */}
            <Route path='/contact' element={<Contact />} />
            
            {/* Route for the login page */}
            {/* When the path is '/loginUser', the LogInSection component will be rendered */}
            <Route path='/loginUser' element={<LogInSection />} />
            
            {/* Route for the sign-up page */}
            {/* When the path is '/signup', the SignUp component will be rendered */}
            <Route path='/signup' element={<SignUp />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
