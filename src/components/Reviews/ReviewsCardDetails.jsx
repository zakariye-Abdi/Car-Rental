import React from "react";
import user from "../Reviews/user.png";
import { FaQuoteRight } from "react-icons/fa";

function ReviewsCardDetails() {
  return (
    <>
      {/* Container for individual review card details */}
      <div className="review-card-details-container w-[50%] h-full flex flex-col justify-center items-center text-center">
        
        {/* Quote icon */}
        <FaQuoteRight className="w-10 h-10 text-[#DD3219]" />
        
        {/* Review text */}
        <p className="mt-10 text-xl italic max-[660px]:text-lg max-[550px]:text-sm max-[550px]:w-96">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          porro placeat sapiente, corporis, numquam officia doloremque
          aspernatur ducimus unde, possimus dolores doloribus sed! Nobis
          voluptatum minima possimus saepe. Pariatur, dolorem.
        </p>

        {/* User details */}
        <div className="user-dets mt-10 flex flex-col justify-center items-center">
          {/* User image */}
          <img className="w-10 max-[550px]" src={user} alt="user" />
          
          {/* User name */}
          <p className="mt-4 tracking-widest uppercase font-bold">zaki</p>
        </div>
      </div>
    </>
  );
}

export default ReviewsCardDetails;
