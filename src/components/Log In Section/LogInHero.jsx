
import React from 'react'
import HeroBg from '../VechicleListins/Hero Section/VehhicleListing Hero Bg.jpeg'

function LogInHero() {
  return (
    <>
      {/* Container for the hero section */}
      <div className="vehicle-hero-container w-full h-[50vh] bg-red-500 relative">
        
        {/* Background image */}
        <img
          src={HeroBg}
          className="w-full h-full object-cover object-[center_center]"
          alt="Hero Background"
        />

        {/* Overlay for text content */}
        <div className="bg-[#000000c9] absolute top-0 w-full h-full flex justify-center items-center flex-col">
          {/* Main heading */}
          <h1 className="uppercase text-white text-4xl font-bold">
            Log In
          </h1>
        </div>
      </div> 
    </>
  )
}

export default LogInHero
