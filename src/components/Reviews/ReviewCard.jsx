import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../Reviews/ReviewCard.css';

// Import required modules from Swiper
import { Pagination } from 'swiper/modules';
import ReviewsCardDetails from './ReviewsCardDetails';

export default function ReviewCard() {
  return (
    <div className='flex flex-col justify-center items-center w-[100rem] pb-10 max-lg:w-[80rem] max-md:w-[70rem] max-[660px]:w-[60rem] h-full'>
      {/* Swiper component for the review carousel */}
      <Swiper 
        spaceBetween={30} // Space between slides
        pagination={{
          clickable: true, // Enable clickable pagination bullets
        }}
        modules={[Pagination]} // Include the Pagination module
        className="mySwiper min-h-[50vh] max-md:h-[30vh] overflow-hidden max-[550px]:w-[50rem] h-full"
      >
        {/* Each SwiperSlide represents an individual slide */}
        <SwiperSlide>
          <ReviewsCardDetails /> {/* Content of the slide */}
        </SwiperSlide>
        <SwiperSlide>
          <ReviewsCardDetails /> {/* Content of the slide */}
        </SwiperSlide>
        <SwiperSlide>
          <ReviewsCardDetails /> {/* Content of the slide */}
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
