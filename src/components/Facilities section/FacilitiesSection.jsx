import React from "react";
import FacilitiesCard from "./FacilitiesCard";

// Importing icons from react-icons library
import { GiSpeedometer } from "react-icons/gi";
import { RiSteering2Line, RiPriceTag3Fill } from "react-icons/ri";

function FacilitiesSection() {
  return (
    <div>
      {/* Container for the facilities section with responsive design adjustments */}
      <div className="w-full min-h-[50vh] flex justify-center items-center my-20 max-md:h-[120vh]">
        <div className="f-card-container w-full h-[60vh] flex gap-4 justify-center items-center max-lg:gap-4 max-md:flex-col max-md:h-auto max-md:mb-10">
          {/* First FacilitiesCard component with an icon, tagline, and text */}
          <FacilitiesCard
            fCardIcon={
              <GiSpeedometer className="w-24 h-24 text-[#DD3219] max-lg:w-20 max-lg:h-20 group-hover:text-[#ffffff]" />
            }
            fCardTagline="Fast & Easy Booking"
            fCardText="Semper aibers vestibulum fringil voluptate velit esse cillum Lorem ipsum dolor sit conse incididunt ut labore et dolore."
          />

          {/* Second FacilitiesCard component with a different icon, tagline, and text */}
          <FacilitiesCard
            fCardIcon={
              <RiSteering2Line className="w-24 h-24 text-[#DD3219] max-lg:w-20 max-lg:h-20 group-hover:text-[#ffffff]" />
            }
            fCardTagline="Many Pickup Locations"
            fCardText="Semper aibers vestibulum fringil voluptate velit esse cillum Lorem ipsum dolor sit conse incididunt ut labore et dolore."
          />

          {/* Third FacilitiesCard component with another icon, tagline, and text */}
          <FacilitiesCard
            fCardIcon={
              <RiPriceTag3Fill className="w-24 h-24 text-[#DD3219] max-lg:w-20 max-lg:h-20 group-hover:text-[#ffffff]" />
            }
            fCardTagline="No Booking Charges"
            fCardText="Semper aibers vestibulum fringil voluptate velit esse cillum Lorem ipsum dolor sit conse incididunt ut labore et dolore."
          />
        </div>
      </div>
    </div>
  );
}

export default FacilitiesSection;
