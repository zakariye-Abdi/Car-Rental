import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../Newest car fleet/NewestCarCard.css";
import SliderImg1 from '../Newest car fleet/Slider Img 1.jpeg';
import SliderImg2 from '../Newest car fleet/Slider Img 2.jpeg';
import SliderImg3 from '../Newest car fleet/Slider Img 3.jpeg';
import SliderImg4 from '../Newest car fleet/Slider Img 4.jpeg';

// Import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function NewestCarCard() {
  return (
    <>
      {/* Swiper component for carousel effect */}
      <Swiper
        effect={"coverflow"} // Set the effect to coverflow
        grabCursor={true} // Show the grab cursor when hovering over slides
        centeredSlides={true} // Center the active slide
        slidesPerView={"auto"} // Automatically adjust the number of slides per view
        coverflowEffect={{
          rotate: 50, // Rotate effect
          stretch: 0, // Stretch effect
          depth: 100, // Depth effect
          modifier: 1, // Modifier for effect
          slideShadows: true, // Enable slide shadows
        }}
        pagination={true} // Show pagination bullets
        modules={[EffectCoverflow, Pagination]} // Include required modules
        className="mySwiper" // Class for custom styling
      >
        {/* Each SwiperSlide represents an individual slide */}
        <SwiperSlide>
          <img src={SliderImg1} alt="Slider Image 1" /> {/* Slide 1 image */}
        </SwiperSlide>
        <SwiperSlide>
          <img src={SliderImg2} alt="Slider Image 2" /> {/* Slide 2 image */}
        </SwiperSlide>
        <SwiperSlide>
          <img src={SliderImg3} alt="Slider Image 3" /> {/* Slide 3 image */}
        </SwiperSlide>
        <SwiperSlide>
          <img src={SliderImg4} alt="Slider Image 4" /> {/* Slide 4 image */}
        </SwiperSlide>
      </Swiper>
    </>
  );
}
