import React from "react";
import HeroBg from "../Hero Section/VehhicleListing Hero Bg.jpeg";

function VechicleHero() {
  return (
    <>
      {/* Container for the hero section */}
      <div className="vehicle-hero-container w-full h-[50vh] bg-red-500 relative">
        
        {/* Background image for the hero section */}
        <img
          src={HeroBg}
          className="w-full h-full object-cover object-[center_center]"
          alt="Vehicle Listings Hero Background"
        />

        {/* Overlay with dark background and centered content */}
        <div className="bg-[#000000c9] absolute top-0 w-full h-full flex justify-center items-center flex-col">
          
          {/* Main title for the hero section */}
          <h1 className="uppercase text-white text-4xl font-bold">
            Vehicle Listings
          </h1>

          {/* Subtitle for additional context */}
          <p className="text-white tracking-widest mt-4 text-sm uppercase">
            Browse Our Inventory
          </p>

          {/* Warning note about data accuracy */}
          <div className="note w-[28rem] h-6 bg-[#FEEBC8] mt-10 flex justify-center items-center gap-2 max-[500px]:w-[20rem] max-[500px]:h-auto">
            <i className="ri-error-warning-fill text-[#C05621]"></i>
            <p className="uppercase font-medium text-xs">
              The data is shown is not correct and will be inappropriate
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default VechicleHero;
