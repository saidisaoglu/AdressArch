import React from "react";
import VlogSectionCarouselScss from "./VlogSectionCarousel.module.scss";
import AllInformationJS from "../../informations";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function VlogSectionCarousel() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={VlogSectionCarouselScss.vlogSwiper}
      >
        <SwiperSlide className={VlogSectionCarouselScss.vlogSwiperItem}>
          <img
            src={AllInformationJS.VlogsImages.carouselImg1}
            alt="Carousel Item 1"
          />
        </SwiperSlide>
        <SwiperSlide className={VlogSectionCarouselScss.vlogSwiperItem}>
          <img
            src={AllInformationJS.VlogsImages.carouselImg1}
            alt="Carousel Item 1"
          />
        </SwiperSlide>
        <SwiperSlide className={VlogSectionCarouselScss.vlogSwiperItem}>
          <img
            src={AllInformationJS.VlogsImages.carouselImg1}
            alt="Carousel Item 1"
          />
        </SwiperSlide>
        <SwiperSlide className={VlogSectionCarouselScss.vlogSwiperItem}>
          <img
            src={AllInformationJS.VlogsImages.carouselImg1}
            alt="Carousel Item 1"
          />
        </SwiperSlide>
        <SwiperSlide className={VlogSectionCarouselScss.vlogSwiperItem}>
          <img
            src={AllInformationJS.VlogsImages.carouselImg1}
            alt="Carousel Item 1"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
