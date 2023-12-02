import React, { useRef, useState } from "react";
import VlogScss from "./Vlog.module.scss";
import VlogSectionCarousel from "./VlogSectionCarousel";
import AllInformationJS from "../../informations";

export default function Vlog() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  const buttonStyle = {
    display: isPlaying ? "none" : "block",
  };
  return (
    <section className={VlogScss.VlogSection}>
      <div className={VlogScss.VlogSectionHeader}>
        <h2>{AllInformationJS.texts.vlogs}</h2>
        <img src={AllInformationJS.VlogsImages.vectorImg} alt="Vector Image" />
      </div>
      {/* <VlogSectionCarousel /> */}
      <div className={VlogScss.videoContainer}>
        <img
          onClick={handlePlay}
          className={VlogScss.playButton}
          src={AllInformationJS.VlogsImages.playButtonimg}
          alt="Play Button"
          style={buttonStyle}
        />
        <video
          controls={isPlaying}
          poster={AllInformationJS.VlogsImages.thumbNail}
          ref={videoRef}
          src={AllInformationJS.VlogsImages.video1}
        ></video>
        <VlogSectionCarousel />
      </div>
    </section>
  );
}
