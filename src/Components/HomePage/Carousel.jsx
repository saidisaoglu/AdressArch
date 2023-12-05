import React from "react";
import Carousel from "react-bootstrap/Carousel";
import AllInformationJS from "../../informations";
import "./Carousel.css";

export default function CarouselInNavbar() {
  const Images = [
    AllInformationJS.CarouselInNavbar.imageOne,
    AllInformationJS.CarouselInNavbar.imageTwo,
    AllInformationJS.CarouselInNavbar.imageThree,
    AllInformationJS.CarouselInNavbar.imageFour,
    AllInformationJS.CarouselInNavbar.imageFive,
  ];
  return (
    <Carousel className="carousel" loop={true}>
      {Images.map((image, index) => (
        <Carousel.Item className="carouselItem" key={index}>
          <img src={image} alt="Images" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
