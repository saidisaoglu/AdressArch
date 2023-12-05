import styles from "./Projects.module.scss";
import "./Projects.css";
import AllInformationJS from "../../informations";
import { useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Vlog from "../Vlog/Vlog";

export default function Projects({ projectsRef, vlogRef }) {
  const [activeButton, setActiveButton] = useState("Interior");

  const buttonName = {
    Interior: [AllInformationJS.texts.Interior],
    Exterior: [AllInformationJS.texts.Exterior],
    Landscape: [AllInformationJS.texts.Landscape],
    RepairAndConstruction: [AllInformationJS.texts.RepairAndConstruction],
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const imagesMap = {
    Interior: [
      AllInformationJS.ProjectsImages.InteriorImages.InteriorImages1,
      AllInformationJS.ProjectsImages.InteriorImages.InteriorImages2,
      AllInformationJS.ProjectsImages.InteriorImages.InteriorImages3,
      AllInformationJS.ProjectsImages.InteriorImages.InteriorImages4,
      AllInformationJS.ProjectsImages.InteriorImages.InteriorImages5,
      AllInformationJS.ProjectsImages.InteriorImages.InteriorImages6,
    ],
    Exterior: [
      AllInformationJS.ProjectsImages.ExteriorImages.ExteriorImages1,
      AllInformationJS.ProjectsImages.ExteriorImages.ExteriorImages2,
      AllInformationJS.ProjectsImages.ExteriorImages.ExteriorImages3,
      AllInformationJS.ProjectsImages.ExteriorImages.ExteriorImages4,
      AllInformationJS.ProjectsImages.ExteriorImages.ExteriorImages5,
      AllInformationJS.ProjectsImages.ExteriorImages.ExteriorImages6,
    ],
    Landscape: [
      AllInformationJS.ProjectsImages.LandscapeImages.LandscapeImages1,
      AllInformationJS.ProjectsImages.LandscapeImages.LandscapeImages2,
      AllInformationJS.ProjectsImages.LandscapeImages.LandscapeImages3,
      AllInformationJS.ProjectsImages.LandscapeImages.LandscapeImages4,
      AllInformationJS.ProjectsImages.LandscapeImages.LandscapeImages5,
      AllInformationJS.ProjectsImages.LandscapeImages.LandscapeImages6,
    ],
    RepairAndConstruction: [
      AllInformationJS.ProjectsImages.RepairImages.RepairImages1,
      AllInformationJS.ProjectsImages.RepairImages.RepairImages2,
      AllInformationJS.ProjectsImages.RepairImages.RepairImages3,
    ],
  };

  return (
    <section ref={projectsRef} className={styles.container}>
      <div className={styles.sectionContainer}>
        <div className={styles.textContainer}>
          <p>{AllInformationJS.texts.projects}</p>
        </div>
        <div className={styles.buttonAndSliderContainer}>
          <div className={styles.buttonContainer}>
            <div className={styles.firstPartButtons}>
              <button onClick={() => handleButtonClick("Interior")}>
                <img
                  className={styles.backgroundColorInProject}
                  src={
                    activeButton === "Interior"
                      ? AllInformationJS.ProjectsImages.Background
                          .ActiveBackground
                      : AllInformationJS.ProjectsImages.Background
                          .OtherBackground
                  }
                  alt="backgroundColor"
                />
                <p
                  className={
                    activeButton === "Interior" ? styles.activeButton : ""
                  }
                >
                  {buttonName.Interior}
                </p>
              </button>
              <button onClick={() => handleButtonClick("Exterior")}>
                <img
                  className={styles.backgroundColorInProject}
                  src={
                    activeButton === "Exterior"
                      ? AllInformationJS.ProjectsImages.Background
                          .ActiveBackground
                      : AllInformationJS.ProjectsImages.Background
                          .OtherBackground
                  }
                  alt="backgroundColor"
                />
                <p
                  className={
                    activeButton === "Exterior" ? styles.activeButton : ""
                  }
                >
                  {buttonName.Exterior}
                </p>
              </button>
            </div>
            <div className={styles.secondPartButtons}>
              <button onClick={() => handleButtonClick("Landscape")}>
                <img
                  className={styles.backgroundColorInProject}
                  src={
                    activeButton === "Landscape"
                      ? AllInformationJS.ProjectsImages.Background
                          .ActiveBackground
                      : AllInformationJS.ProjectsImages.Background
                          .OtherBackground
                  }
                  alt="backgroundColor"
                />
                <p
                  className={
                    activeButton === "Landscape" ? styles.activeButton : ""
                  }
                >
                  {buttonName.Landscape}
                </p>
              </button>
              <button
                onClick={() => handleButtonClick("RepairAndConstruction")}
              >
                <img
                  className={styles.backgroundColorInProject}
                  src={
                    activeButton === "RepairAndConstruction"
                      ? AllInformationJS.ProjectsImages.Background
                          .ActiveBackground
                      : AllInformationJS.ProjectsImages.Background
                          .OtherBackground
                  }
                  alt="backgroundColor"
                />
                <p
                  className={
                    activeButton === "RepairAndConstruction"
                      ? styles.activeButton
                      : ""
                  }
                >
                  {buttonName.RepairAndConstruction}
                </p>
              </button>
            </div>
          </div>
          <Swiper
            loop={true}
            speed={1000}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className={styles.carousel}
          >
            {imagesMap[activeButton].map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt="images" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className={styles.vlogElement}>
        <Vlog vlogRef={vlogRef} />
      </div>
    </section>
  );
}
