import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "./cubeStyles.css";

// import required modules
import { EffectCube, Pagination } from "swiper";

export default function CubeCarousel({ topics }) {
  return (
    <>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper "
      >
        {topics.map((t) => (
          <SwiperSlide className="mySwipperSlide">
            <img src={t.data.logo} alt="course-img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
