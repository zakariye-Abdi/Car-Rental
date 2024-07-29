// Dropdown.jsx

import React from 'react';
import { Link } from "react-router-dom";

function Dropdown({ isDropdownVisible, setIsDropdownVisible }) {
  return (
    <div
      // Dropdown container with conditional visibility
      className={`${isDropdownVisible ? "block " : " hidden "} dropdown-container w-44 h-24 bg-white text-black flex flex-col justify-center items-center absolute left-[0%] top-[200%] after:content-[''] after:w-[35px] after:h-[20px] after:border-2 after:border-white after:absolute after:bottom-[110%] after:left-8 after:rotate-45 after:mb-[-25px] after:border-b-0 after:border-r-0 after:bg-white`}
      // Event handlers to manage dropdown visibility
      onMouseEnter={() => setIsDropdownVisible(true)} // Show dropdown on mouse enter
      onMouseLeave={() => setIsDropdownVisible(false)} // Hide dropdown on mouse leave
    >
      {/* Dropdown menu items */}
      <ul className='text-sm font-medium flex flex-col gap-3'>
        {/* Link to Vehicle Listing page */}
        <Link className='hover:text-[#DC2D13] transition-all duration-150 ease-in-out' to='/vechileListing'>
          <li>VEHICLE LISTING</li>
        </Link>
        {/* Link to Dealer Location page */}
        <Link className='hover:text-[#DC2D13] transition-all duration-150 ease-in-out' to='/dealerLocation'>
          <li>DEALER LOCATION</li>
        </Link>
      </ul>
    </div>
  );
}

export default Dropdown;
