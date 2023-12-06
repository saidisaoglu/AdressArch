import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import $ from "jquery";
import "slick-carousel/slick/slick.min.js";

const VlogSlider = () => {
  useEffect(() => {
    $(".slider").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      autoplay: true,
    });
  }, []); // Ensure the effect runs only once on mount

  return (
    <div className="slider">
      <div className="item">
        <img
          width="800px"
          height="400px"
          src="https://a.d-cd.net/iQAAAgIKsOA-1920.jpg"
          alt=""
        />
      </div>
      <div className="item">
        <img
          width="800px"
          height="400px"
          src="https://assetto-corsa.lu/wp-content/uploads/2021/10/BMW-M5-G30-Competition-Brands-Hatch-Grey-00001.jpg"
          alt=""
        />
      </div>
      <div className="item">
        <img
          width="800px"
          height="400px"
          src="https://auto.cdn-rivamedia.com/photos/annonce/big/bmw-m5---bva-berline-g30-f90-lci-competition-phase-2-137181156.jpg"
          alt=""
        />
      </div>
      <div className="item">
        <img
          width="800px"
          height="400px"
          src="https://auto.cdn-rivamedia.com/photos/annonce/big/bmw-m5---bva-berline-g30-f90-lci-competition-phase-2-137181156.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default VlogSlider;
