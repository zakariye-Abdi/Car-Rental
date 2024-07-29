import React from "react";
import image from "../Get App/GetAppImg.png"; // Main image for the "Get App" section
import AppleImage from "../Get App/Apple Image.jpg"; // Image for Apple App Store download button
import AndroidImage from "../Get App/Android Image.jpg"; // Image for Google Play Store download button

function GetAppContent() {
  return (
    <>
      {/* Main container for the "Get App" content section */}
      <div className="get-app-content-container w-[65rem] h-full my-20 m-auto max-lg:w-[50rem] max-md:w-[40rem] max-[640px]:w-[30rem] max-[500px]:w-[20rem]">
        {/* Flexbox container for aligning the left and right content */}
        <div className="flex justify-center items-center max-md:flex-col max-md:gap-10">
          
          {/* Left content section containing the main image */}
          <div className="left-content w-[25rem] max-lg:w-[20rem] max-md:w-[10rem]">
            <img src={image} alt="" />
          </div>

          {/* Right content section containing text and buttons */}
          <div className="right-content text-black w-[35rem] max-lg:w-[25rem] max-md:w-[35rem] max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-md:text-center max-[640px]:w-[30rem] max-[500px]:w-[20rem]">
            
            {/* Main tagline */}
            <p className="text-xl uppercase font-normal tracking-wider max-[500px]:text-sm">
              Car Rentals Made Simple.
            </p>
            
            {/* Heading for the download section */}
            <h1 className="text-4xl font-semibold max-[500px]:text-2xl">
              DOWNLOAD OUR APP
            </h1>

            {/* Descriptive text about the app */}
            <p className="mt-10 font-light tracking-wider max-[500px]:text-sm">
              Explore freedom on wheels with our hassle-free car rentals. From compact to spacious, find the perfect ride for your journey. Start driving towards your next adventure today
            </p>

            {/* Buttons for app download */}
            <div className="buttons flex items-center gap-4 mt-10 max-[500px]:flex-col">
              <img src={AppleImage} className="w-44 cursor-pointer" alt="Download on the Apple App Store" />
              <img src={AndroidImage} className="w-44 cursor-pointer" alt="Get it on Google Play" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetAppContent;
