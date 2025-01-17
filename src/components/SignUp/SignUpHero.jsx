import React from 'react';
import HeroBg from '../VechicleListins/Hero Section/VehhicleListing Hero Bg.jpeg';

function SignUpHero() {
  return (
    <>
      {/* Container for the hero section */}
      <div className="vehicle-hero-container w-full h-[50vh] bg-red-500 relative">
        
        {/* Background image */}
        <img
          src={HeroBg}
          className="w-full h-full object-cover object-[center_center]"
          alt="Hero background"
        />

        {/* Overlay with a dark semi-transparent background */}
        <div className="bg-[#000000c9] absolute top-0 w-full h-full flex justify-center items-center flex-col">
          
          {/* Main heading for the hero section */}
          <h1 className="uppercase text-white text-4xl font-bold">
            Sign Up
          </h1>
         
        </div>
      </div> 
    </>
  );
}

export default SignUpHero;
