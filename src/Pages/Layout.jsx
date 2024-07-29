import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import UpperNav from '../components/UperNav/UpperNav';

function Layout() {
  return (
    <div>
      {/* Upper Navigation Bar */}
      {/* This component typically includes top-level navigation or contact information */}
      <UpperNav />

      {/* Main Navigation Bar */}
      {/* This component usually contains the primary navigation links for the site */}
      <Navbar />

      {/* Outlet for Nested Routes */}
      {/* This is where the routed content will be rendered based on the current route */}
      <Outlet />

      {/* Footer Section */}
      {/* This component typically includes contact details, links, and other footer-related content */}
      <Footer />
    </div>
  );
}

export default Layout;
