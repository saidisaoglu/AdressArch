import React from "react";
import styles from "./CustomerCommentsCarousel.module.scss";
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
        className={styles.Carousel}
        indicators={false}
      >
        <Carousel.Item className={styles.item1}>
          <div className={styles.CustomerCommentsCard}>
            <img
              src={AllInformationJS.CustomerReviews.FirstPerson.PersonImages}
              alt="First Person"
            />
            <div>
              <div className={styles.CustomerCommentsDesc}>
                <h2>{AllInformationJS.CustomerReviews.FirstPerson.FullName}</h2>
                <p>
                  {
                    AllInformationJS.CustomerReviews.FirstPerson
                      .PersonInformations
                  }
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className={styles.item1}>
          <div className={styles.CustomerCommentsCard}>
            <img
              src={AllInformationJS.CustomerReviews.SecondPerson.PersonImages}
              alt="First Person"
            />
            <div>
              <div className={styles.CustomerCommentsDesc}>
                <h2>
                  {AllInformationJS.CustomerReviews.SecondPerson.FullName}
                </h2>
                <p>
                  {
                    AllInformationJS.CustomerReviews.SecondPerson
                      .PersonInformations
                  }
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className={styles.item1}>
          <div className={styles.CustomerCommentsCard}>
            <img
              src={AllInformationJS.CustomerReviews.ThirdPerson.PersonImages}
              alt="First Person"
            />
            <div>
              <div className={styles.CustomerCommentsDesc}>
                <h2>{AllInformationJS.CustomerReviews.ThirdPerson.FullName}</h2>
                <p>
                  {
                    AllInformationJS.CustomerReviews.ThirdPerson
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
