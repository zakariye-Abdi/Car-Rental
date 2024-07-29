import React from 'react';
import LogInHero from '../components/Log In Section/LogInHero';
import LogInFrom from '../components/Log In Section/LogInFrom';

function LogInSection() {
  return (
    <>
      {/* Login Hero Section */}
      {/* This component typically includes a hero image or banner with login-related messaging or branding */}
      <LogInHero />

      {/* Login Form Section */}
      {/* This component includes the actual login form where users can enter their credentials */}
      <LogInFrom />
    </>
  );
}

export default LogInSection;
