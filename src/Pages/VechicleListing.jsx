import React from 'react';
import VechicleHero from '../components/VechicleListins/Hero Section/VechicleHero';
import VechicleContent from '../components/VechicleListins/Vehicle Listing Content/VechicleContent';

function VechicleListing() {
  return (
    <>
      {/* Hero Section for Vehicle Listing Page */}
      {/* Provides a prominent introduction, usually including a background image, a headline, and a brief description related to vehicle listings */}
      <VechicleHero />
      
      {/* Main Content for Vehicle Listing */}
      {/* Contains the main content of the vehicle listings, including sorting options, vehicle cards, and any additional sidebar or filters */}
      <VechicleContent />
    </>
  );
}

export default VechicleListing;
