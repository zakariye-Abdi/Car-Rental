import React from 'react';
import GetAppContent from '../components/Get App/GetAppContent';
import GetAppHero from '../components/Get App/GetAppHero';

function GetApp() {
  return (
    <>
      {/* Hero section for the Get App page */}
      <GetAppHero />
      
      {/* Main content section for the Get App page */}
      <GetAppContent />
    </>
  );
}

export default GetApp;
