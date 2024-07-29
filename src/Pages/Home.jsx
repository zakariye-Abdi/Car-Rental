import React from 'react';
import HeroSection from '../components/Hero Section/HeroSection';
import FacilitiesSection from '../components/Facilities section/FacilitiesSection';
import BestRentalService from '../components/Best rental service/BestRentalService';
import RentalFleets from '../components/Rental fleets/RentalFleets';
import AdsBanner from '../components/Ads Banner Section/AdsBanner';
import MissionSection from '../components/Mission Section/MissionSection';
import NewestCar from '../components/Newest car fleet/NewestCar';
import Reviews from '../components/Reviews/Reviews';
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <div className='overflow-hidden'>
      {/* Hero section of the Home page */}
      {/* This component typically includes the main headline, a call to action, or introductory visuals */}
      <HeroSection />

      {/* Facilities section of the Home page */}
      {/* This component showcases the various facilities or features offered */}
      <FacilitiesSection />

      {/* Best Rental Service section */}
      {/* Highlights why the rental service is the best or unique selling points */}
      <BestRentalService />

      {/* Rental Fleets section */}
      {/* Displays the range of rental vehicles available */}
      <RentalFleets />

      {/* Ads Banner section */}
      {/* Contains promotional banners or advertisements */}
      <AdsBanner />

      {/* Mission Section */}
      {/* Describes the company's mission or core values */}
      <MissionSection />

      {/* Newest Car section */}
      {/* Features the latest additions to the car fleet */}
      <NewestCar />

      {/* Reviews section */}
      {/* Showcases customer reviews and testimonials */}
      <Reviews />
      
      {/* Footer section */}
      {/* This component typically includes contact information, links, and other footer-related content */}
      <Footer />
    </div>
  );
}

export default Home;
