import React from 'react';
import NewestCarCard from './NewestCarCard';

function NewestCar() {
  return (
    <>
      {/* Container for the newest car section */}
      <div className="newest-car-container w-full min-h-[80vh] flex flex-col justify-center items-center overflow-hidden">
        
        {/* Headings section */}
        <div className="headings text-center">
          {/* Subheading */}
          <h2 className='mb-2 text-sm tracking-wider uppercase'>Cutting-Edge Automotive Marvels</h2>
          {/* Main heading */}
          <h1 className='text-4xl font-bold max-md:mb-10'>NEWEST CARS FLEET</h1>
        </div>

        {/* Component to display the newest car details */}
        <NewestCarCard />
      </div>
    </>
  );
}

export default NewestCar;
