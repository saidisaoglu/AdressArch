import { useState } from "react";
import styles from "./WhereToFindS.module.scss";
import AllInformationJS from "../../informations";

const generateButtons = (
  sliderImages,
  buttonName,
  activeButton,
  handleButtonClick
) => {
  return Object.keys(buttonName).map((buttonKey, index) => (
    <button key={buttonKey} onClick={() => handleButtonClick(buttonKey)}>
      <img
        className={styles.backgroundColorInProject}
        src={
          activeButton === buttonKey
            ? AllInformationJS.ProjectsImages.Background.ActiveBackground
            : AllInformationJS.ProjectsImages.Background.OtherBackground
        }
        alt="backgroundColor"
      />
      <div className={styles.videoAndTexts}>
        {sliderImages[index].map((image, imgIndex) => (
          <img key={imgIndex} src={image} alt="images" />
        ))}
        <p className={activeButton === buttonKey ? styles.activeButton : ""}>
          {buttonName[buttonKey]}
        </p>
      </div>
    </button>
  ));
};

export default function WhereToFindS({ whereToFindRef }) {
  const [activeButton, setActiveButton] = useState("FirstInfo");

  const buttonName = {
    FirstInfo:
      AllInformationJS.whereToFindInformations.TextsInButton.firstTexts,
    SecondInfo:
      AllInformationJS.whereToFindInformations.TextsInButton.secondTexts,
    ThirdInfo:
      AllInformationJS.whereToFindInformations.TextsInButton.thirdTexts,
    FourthInfo:
      AllInformationJS.whereToFindInformations.TextsInButton.fourthTexts,
    FivethInfo:
      AllInformationJS.whereToFindInformations.TextsInButton.fivethTexts,
    SixthInfo:
      AllInformationJS.whereToFindInformations.TextsInButton.sixthTexts,
    SeventhInfo:
      AllInformationJS.whereToFindInformations.TextsInButton.seventhTexts,
    EighthInfo:
      AllInformationJS.whereToFindInformations.TextsInButton.eighthTexts,
  };

  const sliderImages = [
    [AllInformationJS.whereToFindInformations.ImagesInSlide.typesOfDesign],
    [AllInformationJS.whereToFindInformations.ImagesInSlide.arshinTekstil],
    [AllInformationJS.whereToFindInformations.ImagesInSlide.asDoor],
    [AllInformationJS.whereToFindInformations.ImagesInSlide.emilianaParati],
    [AllInformationJS.whereToFindInformations.ImagesInSlide.parketFloor],
    [AllInformationJS.whereToFindInformations.ImagesInSlide.sworos],
    [AllInformationJS.whereToFindInformations.ImagesInSlide.tabrizCarpet],
    [AllInformationJS.whereToFindInformations.ImagesInSlide.xrushovka],
  ];

  const videosInYoutube = {
    FirstInfo: [
      AllInformationJS.whereToFindInformations.InYoutubeVideos
        .typesOfDesignVideo,
    ],
    SecondInfo: [
      AllInformationJS.whereToFindInformations.InYoutubeVideos
        .arshinTekstilVideo,
    ],
    ThirdInfo: [
      AllInformationJS.whereToFindInformations.InYoutubeVideos.asDoorVideo,
    ],
    FourthInfo: [
      AllInformationJS.whereToFindInformations.InYoutubeVideos
        .emilianaParatiVideo,
    ],
    FivethInfo: [
      AllInformationJS.whereToFindInformations.InYoutubeVideos.parketFloorVideo,
    ],
    SixthInfo: [
      AllInformationJS.whereToFindInformations.InYoutubeVideos.sworosVideo,
    ],
    SeventhInfo: [
      AllInformationJS.whereToFindInformations.InYoutubeVideos
        .tabrizCarpetVideo,
    ],
    EighthInfo: [
      AllInformationJS.whereToFindInformations.InYoutubeVideos.xrushovkaVideo,
    ],
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  function getYouTubeVideoId(url) {
    const match = url.match(/(?:\/|v=)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
  }

  return (
    <section className={styles.WhereToFindSection}>
      <div ref={whereToFindRef} className={styles.textContainer}>
        <p>{AllInformationJS.texts.whereToFind}</p>
      </div>
      <div className={styles.sectionContainer}>
        <div className={styles.videosContainer}>
          {videosInYoutube[activeButton].map((index) => (
            <div className={styles.videosElement} key={index}>
              <iframe
                src={`https://www.youtube.com/embed/${getYouTubeVideoId(
                  videosInYoutube[activeButton][0]
                )}`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
        <div className={styles.buttonAndSliderContainer}>
          <div className={styles.buttonContainer}>
            <div className={styles.firstPartButtons}>
              {generateButtons(
                sliderImages,
                buttonName,
                activeButton,
                handleButtonClick
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
