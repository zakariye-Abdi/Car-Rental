import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function HeroSection() {
  // State to manage the selected date
  const [selectedDate, setselectedDate] = useState(null);

  return (
    <div>
      {/* Main container for the hero section */}
      <div className="hero-container w-full h-[100vh] -z-50 top-0">
        
        {/* Background image for the hero section */}
        <div className="hero-bg w-full h-screen bg-hero-pattern bg-no-repeat bg-center bg-cover">
          
          {/* Overlay and content container */}
          <div className="hero-content bg-[#000000a2] w-full h-screen flex flex-col justify-center items-center">
            
            {/* Heading and subheading of the hero section */}
            <div className="hero-heading flex flex-col justify-center items-center">
              <h1 className="text-6xl text-white font-bold tracking-wide max-md:text-4xl max-[448px]:text-2xl">
                Best Car Rental Prices
              </h1>
              <p className="text-xl text-white mt-2 font-semibold max-md:text-sm max-[448px]:w-[80%] max-[448px]:text-center">
                Practical & Convenient Auto Hire, As Low As $25 / day
              </p>
            </div>

            {/* Input form for date selection and car model selection */}
            <div className="inputs w-full mt-10 flex justify-center items-center gap-8 max-lg:gap-10 max-md:flex-col max-md:justify-center">
              <form className="flex items-center gap-10 justify-center max-lg:gap-0 max-md:flex-col max-md:items-center max-md:gap-4 max-md:w-full">
                
                {/* Date picker for pickup date */}
                <div className="date w-52 max-md:w-[100%] max-md:flex max-md:items-center max-md:flex-col max-md:justify-center">
                  <DatePicker
                    className="w-52 h-10 px-4 max-lg:w-[70%] max-md:w-[100%]"
                    placeholderText="Select Date"
                    selected={selectedDate}
                    onChange={(date) => setselectedDate(date)}
                    dateFormat={"dd/MM/yyyy"}
                    minDate={new Date()} // Ensure the date cannot be set to a past date
                    showMonthDropdown
                    showYearDropdown
                    popperPlacement="bottom"
                  />
                  <p className="text-white text-sm mt-2 font-bold max-lg:text-xs">
                    PICK-UP-DATE
                  </p>
                </div>

                {/* Date picker for drop-off date */}
                <div className="date w-52 max-md:w-[100%] max-md:flex max-md:items-center max-md:flex-col max-md:justify-center">
                  <DatePicker
                    className="w-52 h-10 px-4 max-lg:w-[70%] max-md:w-[100%]"
                    placeholderText="Select Date"
                    selected={selectedDate}
                    onChange={(date) => setselectedDate(date)}
                    dateFormat={"dd/MM/yyyy"}
                    minDate={new Date()} // Ensure the date cannot be set to a past date
                    showMonthDropdown
                    showYearDropdown
                    popperPlacement="bottom"
                  />
                  <p className="text-white text-sm mt-2 font-bold max-lg:text-xs">
                    DROP-OFF-DATE
                  </p>
                </div>

                {/* Dropdown for car model selection */}
                <div className="select max-md:w-[100%] max-md:flex max-md:items-center max-md:flex-col max-md:justify-center">
                  <select 
                    name="cars"
                    id="cars"
                    className="w-56 h-10 px-4 text-sm max-lg:w-[95%] max-md:w-60"
                  >
                    {/* List of car models */}
                    <option value="ALL BRANDS" disabled selected>
                      ALL MODELS
                    </option>
                    <option value="TATA">TATA</option>
                    <option value="Mahindra">Mahindra</option>
                    <option value="Maruti Suzuki">Maruti Suzuki</option>
                    <option value="Hyundai">Hyundai</option>
                    <option value="Honda">Honda</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Ford">Ford</option>
                    <option value="Kia">Kia</option>
                  </select>
                  <p className="text-white text-sm mt-2 font-bold max-lg:text-xs">
                    MAKERS OF VEHICLES
                  </p>
                </div>
              </form>

              {/* Button to trigger search action */}
              <button
                className="text-white px-8 py-3 mb-7 bg-[BLUE] text-sm relative font-bold hover:bg-[#FFA500] transition-all duration-150 ease-in-out max-lg:px-6"
                type="button"
              >
                FIND IT NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
