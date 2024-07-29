import React from 'react';

function UpperNav({ paginationLeft }) {
  // Log the paginationLeft prop to the console
  console.log('paginationLeft:', paginationLeft);

  return (
    <div>
      {/* Upper navigation container */}
      <div className="upper-nav-container w-9/12 absolute top-0 left-[10%] h-12 m-auto flex justify-between items-center px-10 max-lg:px-2 max-sm:justify-center">
        
        {/* Left side of the upper navigation with contact details */}
        <div className="left-upper-nav text-white gap-4 flex justify-center items-center h-12 text-xs max-[430px]:flex-col max-[430px]:gap-1">
          {/* Phone contact */}
          <div className="phone flex gap-4">
            <i className="ri-phone-line"></i>
            <p>+252611118380</p>
          </div>
          {/* Email contact */}
          <div className="mail flex gap-4">
            <i className="ri-mail-open-line"></i>
            <p>ZakiCabdi@gmail.com</p>
          </div>
        </div>

        {/* Right side of the upper navigation with social media icons */}
        <div className="right-upper-nav text-white gap-4 flex justify-center items-center h-12 text-sm max-sm:hidden">
          {/* Social media icons with hover effect */}
          <i className="ri-facebook-line hover:text-[#DC2D13] transition-all duration-150 ease-in-out cursor-pointer"></i>
          <i className="ri-twitter-line hover:text-[#DC2D13] transition-all duration-150 ease-in-out cursor-pointer"></i>
          <i className="ri-pinterest-line hover:text-[#DC2D13] transition-all duration-150 ease-in-out cursor-pointer"></i>
          <i className="ri-youtube-line hover:text-[#DC2D13] transition-all duration-150 ease-in-out cursor-pointer"></i>
          <i className="ri-instagram-line hover:text-[#DC2D13] transition-all duration-150 ease-in-out cursor-pointer"></i>
        </div>
      </div>

      {/* Optional pagination indicator (commented out) */}
      {/* <div className={`pagination w-10 h-1 bg-[#DC2D13] z-50 absolute ${paginationLeft}`}></div> */}

      {/* Horizontal rule separator */}
      <hr className='w-9/12 m-auto relative' />
    </div>
  );
}

export default UpperNav;
