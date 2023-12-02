import React from "react";
import CustomerCommentsCarouselScss from "./CustomerCommentsCarousel.module.scss";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import AllInformationJS from "../../informations";

function CustomerCommentsCarousel() {
  const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex) => {
  //   // Carousel son slayta geldiğinde veya ilk slayta geri döndüğünde
  //   // bu durumu kontrol etmek için bir koşul ekleyin.
  //   if (selectedIndex < 0) {
  //     setIndex(0);
  //   } else if (selectedIndex >= carouselItemCount) {
  //     setIndex(carouselItemCount - 1);
  //   } else {
  //     setIndex(selectedIndex);
  //   }
  // };
  // const handlePrevious = () => {
  //   setIndex(index - 1);
  // };

  // const handleNext = () => {
  //   setIndex(index + 1);
  // };
  return (
    <>
      {/* <button onClick={handleSelect}>Arxa</button> */}
      <Carousel
        nextLabel="Next"
        prevLabel="Previous"
        activeIndex={index}
        onSelect={(selectedIndex) => setIndex(selectedIndex)}
        className={CustomerCommentsCarouselScss.Carousel}
        indicators={false}
      >
        <Carousel.Item className={CustomerCommentsCarouselScss.item1}>
          <div className={CustomerCommentsCarouselScss.CustomerCommentsCard}>
            <img
              src={
                AllInformationJS.whereToFindInformations.FirstPerson
                  .PersonImages
              }
              alt="First Person"
            />
            <div>
              <div
                className={CustomerCommentsCarouselScss.CustomerCommentsDesc}
              >
                <h2>
                  {
                    AllInformationJS.whereToFindInformations.FirstPerson
                      .FullName
                  }
                </h2>
                <p>
                  {
                    AllInformationJS.whereToFindInformations.FirstPerson
                      .PersonInformations
                  }
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className={CustomerCommentsCarouselScss.item1}>
          <div className={CustomerCommentsCarouselScss.CustomerCommentsCard}>
            <img
              src={
                AllInformationJS.whereToFindInformations.SecondPerson
                  .PersonImages
              }
              alt="First Person"
            />
            <div>
              <div
                className={CustomerCommentsCarouselScss.CustomerCommentsDesc}
              >
                <h2>
                  {
                    AllInformationJS.whereToFindInformations.SecondPerson
                      .FullName
                  }
                </h2>
                <p>
                  {
                    AllInformationJS.whereToFindInformations.SecondPerson
                      .PersonInformations
                  }
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className={CustomerCommentsCarouselScss.item1}>
          <div className={CustomerCommentsCarouselScss.CustomerCommentsCard}>
            <img
              src={
                AllInformationJS.whereToFindInformations.ThirdPerson
                  .PersonImages
              }
              alt="First Person"
            />
            <div>
              <div
                className={CustomerCommentsCarouselScss.CustomerCommentsDesc}
              >
                <h2>
                  {
                    AllInformationJS.whereToFindInformations.ThirdPerson
                      .FullName
                  }
                </h2>
                <p>
                  {
                    AllInformationJS.whereToFindInformations.ThirdPerson
                      .PersonInformations
                  }
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      {/* <button onClick={handleSelect}>on</button> */}
    </>
  );
}

export default CustomerCommentsCarousel;
