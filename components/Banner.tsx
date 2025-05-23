"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectFade,
  FreeMode,
  Navigation,
  Thumbs,
  Pagination,
} from "swiper/modules";
import { memo } from "react";
import Slide1 from "@/public/images/slide1.jpg";
import Slide2 from "@/public/images/slide2.jpg";
import Slide3 from "@/public/images/slide3.jpg";
import Slide4 from "@/public/images/slide4.jpg";
import Slide5 from "@/public/images/slide5.jpg";
import Slide6 from "@/public/images/slide6.png";
import Image from "next/image";
import "swiper/css/pagination";

const SLIDES = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6];

const Banner = () => {
  return (
    <div className="h-full">
      <Swiper
        // install Swiper modules
        modules={[
          Autoplay,
          EffectFade,
          FreeMode,
          Navigation,
          Thumbs,
          Pagination,
        ]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        navigation
        loop={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="detail h-full"
      >
        {SLIDES.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <Image
                src={slide}
                className="w-full h-full object-cover"
                alt="slide"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.2)]"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default memo(Banner);
