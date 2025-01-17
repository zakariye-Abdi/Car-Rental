
import React from 'react';
import ReviewsCardDetails from './ReviewsCardDetails';
import ReviewsCard from './ReviewCard';

function Reviews() {
  return (
    <>
      {/* Container for the reviews section */}
      <div className="reviews-container w-full h-[80vh] flex flex-col justify-center items-center overflow-hidden">
        
        {/* Headings section */}
        <div className="heading">
          {/* Subheading */}
          <h2 className='uppercase text-center tracking-wider max-[550px]:text-xs'>
            Voices of Satisfaction
          </h2>
          {/* Main heading */}
          <h1 className='uppercase text-4xl font-medium mb-10 max-[550px]:text-2xl'>
            Customer reviews
          </h1>
        </div>

        {/* Component to display review cards */}
        <ReviewsCard />
      </div>
    </>
  );
}

export default Reviews;
