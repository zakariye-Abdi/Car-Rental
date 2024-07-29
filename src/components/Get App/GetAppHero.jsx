import React from "react";
import HeroBg from "../Get App/VehhicleListing Hero Bg.jpeg"; // Background image for the hero section

function GetAppHero() {
  return (
    <>
      {/* Main container for the hero section */}
      <div className="vehicle-hero-container w-full h-[50vh] bg-red-500 relative">
        
        {/* Background image for the hero section */}
        <img
          src={HeroBg}
          className="w-full h-full object-cover object-[center_center]"
          alt="Hero Background"
        />

        {/* Overlay and content container */}
        <div className="bg-[#000000c9] absolute top-0 w-full h-full flex justify-center items-center flex-col">
          
          {/* Hero section heading */}
          <h1 className="uppercase text-white text-4xl font-bold">
            Get Our App
          </h1>

          {/* Hero section subheading */}
          <p className="text-white tracking-widest mt-4 text-sm uppercase">
            Browse Our Inventory
          </p>
        </div>
      </div>
    </>
  );
}

export default GetAppHero;
