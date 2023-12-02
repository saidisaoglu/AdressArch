import styles from "./SwiperSlide.module.scss";
import AllInformationJS from "../../informations";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function CoverflowSwiper() {
  const Images = [
    AllInformationJS.CarouselInNavbar.imageOne,
    AllInformationJS.CarouselInNavbar.imageTwo,
    AllInformationJS.CarouselInNavbar.imageThree,
  ];
  return (
    <div className={styles.swiperContainer}>
      {["mobileAndTabletVersion", "laptopVersion"].map((version, index) => (
        <Swiper
          key={index}
          slidesPerView={index === 0 ? 1 : 2}
          spaceBetween={0}
          centeredSlides={true}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className={`${styles.mySwiper} ${styles[version]}`}
        >
          {Images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt="Images" />
            </SwiperSlide>
          ))}
        </Swiper>
      ))}
    </div>
  );
}
