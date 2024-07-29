import React from 'react';
import ContactHero from '../components/Contact/ContactHero';
import ContactSection from '../components/Contact/ContactSection';
import UpperNav from '../components/UperNav/UpperNav';

function Contact() {
  return (
    <>
      {/* Upper navigation bar */}
      <UpperNav />
      
      {/* Hero section for contact page */}
      <ContactHero /> 
      
      {/* Main contact section with contact form and details */}
      <ContactSection />
    </>
  );
}

export default Contact;
