import React, { useState } from "react";
import RentalFleetsCards from "./RentalFleetsCards";
import '../Rental fleets/loader.css';
import { FaCaretDown } from "react-icons/fa";

function RentalFleets() {
  // State to control loader visibility
  const [isLoader, setisLoader] = useState(false);
  // State to control button visibility
  const [isButton, setisButton] = useState(true);

  // Function to toggle loader and button visibility
  const showLoader = () => {
    setisLoader(!isLoader);

    setTimeout(() => {
      setisLoader(false);
      setisButton(false);
    }, 1000);
  };

  return (
    <>
      {/* Container for the rental fleets section */}
      <div className={`rental-fleets-container w-full min-h-screen bg-slae-500 flex flex-col justify-center items-center overflow-hidden ${isLoader ? 'max-md:h-[300vh]' : 'max-md:min-h-[300vh]'} mb-20`}>
        
        {/* Headings section */}
        <div className="f-headings w-full flex flex-col justify-center items-center">
          {/* Subheading */}
          <h2 className="text-base uppercase max-lg:text-sm max-[500px]:text-xs max-[380px]:text-[10px]">
            Discover the Perfect Ride for Every Occasion
          </h2>
          {/* Main heading */}
          <h1 className="text-5xl font-bold tracking-wider max-lg:text-4xl max-[500px]:text-3xl max-[380px]:text-xl">
            OUR RENTAL FLEETS
          </h1>

          {/* Decorative lines */}
          <div className="w-36 h-[0.5px] mt-8 max-lg:mt-6 bg-black"></div>
          <br />
          <div className="w-36 h-[0.5px] mt-[-18px] ml-4 max-lg:mt-[-10px] bg-black"></div>
        </div>

        {/* Button to show all rental fleets */}
        <div className="buttons mt-10 w-[990px] flex justify-start items-start max-lg:w-[750px] max-md:w-[90%] max-[500px]:w-[390px] max-[450px]:w-auto">
          <button
            className="bg-[#DD3219] text-white py-2 px-6 font-medium text-sm"
            type="button"
          >
            SHOW ALL
          </button>
        </div>

        {/* Component to display rental fleet cards */}
        <RentalFleetsCards isButton={isButton} />

        {/* View More button and loader */}
        <div className={`view-more w-full h-20 flex justify-center items-center ${isButton ? 'block' : 'hidden'}`}>
          <button 
            className="bg-[#DD3219] text-white py-2 px-6 font-medium text-base flex justify-center items-center gap-2 w-38 h-10" 
            type="button" 
            onClick={showLoader}
          >
            {/* Conditional rendering of text and loader */}
            <p className={isLoader ? 'hidden' : 'flex justify-center items-center'}>
              View More <FaCaretDown />
            </p>
            <div className={`loader ${isLoader ? 'block' : 'hidden'}`}></div>
          </button>
        </div>
      </div>
    </>
  );
}

export default RentalFleets;
