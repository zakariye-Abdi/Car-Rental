import React from 'react'
import HeroBg from "../Contact/VehhicleListing Hero Bg.jpeg";

function ContactHero() {
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

        {/* Overlay div with content */}
        <div className="bg-[#000000c9] absolute top-0 w-full h-full flex justify-center items-center flex-col">
          
          {/* Title of the hero section */}
          <h1 className="uppercase text-white text-4xl font-bold">
            Contact
          </h1>
          
          {/* Subtitle or additional information */}
          <p className="text-white tracking-widest mt-4 text-sm uppercase">
            Online Inquiry Form
          </p>
        
        </div>
      </div>
    </>
  )
}

export default ContactHero
