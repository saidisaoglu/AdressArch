import React from "react";
import styles from "./Icons.module.scss";
import AllInformationJS from "../../informations";

export default function Icons() {
  return (
    <div className={styles.iconsContainer}>
      <div className={styles.mapIconAndTextElements}>
        <img src={AllInformationJS.Icons.locationIcon} alt="Map Icon" />
        <a href={AllInformationJS.texts.locationInMap} target="blank">
          {AllInformationJS.texts.locationText}
        </a>
      </div>
      <div className={styles.otherIconsElements}>
        <div className={styles.callIconElement}>
          <img src={AllInformationJS.Icons.callIcon} alt="Call Icon" />
          <a href="#">{AllInformationJS.texts.phoneNumber}</a>
        </div>
        <div className={styles.socialMediaElements}>
          <a href="#">
            <img
              src={AllInformationJS.Icons.whatsappIcon}
              alt="Whatsapp Icon"
            />
          </a>
          <a href="#">
            <img
              src={AllInformationJS.Icons.instagramIcon}
              alt="Instagram Icon"
            />
          </a>
          <a href="#">
            <img
              src={AllInformationJS.Icons.facebookIcon}
              alt="Facebook Icon"
            />
          </a>
          <a href="#">
            <img src={AllInformationJS.Icons.youtubeIcon} alt="Youtube Icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
