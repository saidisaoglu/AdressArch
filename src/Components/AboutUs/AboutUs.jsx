import React from "react";
import AllInformationJS from "../../informations";
import styles from "./AboutUs.module.scss";

export default function AboutUs({ aboutUsRef }) {
  return (
    <section ref={aboutUsRef} className={styles.aboutUsContainer}>
      <div className={styles.aboutUsWrapper}>
        <div className={styles.headerContainer}>
          <p>{AllInformationJS.texts.aboutUs}</p>
        </div>
        <div className={styles.imageAndTextContainer}>
          <div className={styles.onlyImg}>
            <img
              src={AllInformationJS.AboutUsInformations.FaridFidanImage}
              alt="About Us"
            />
          </div>
          <div className={styles.textContainer}>
            <p>{AllInformationJS.texts.userName}</p>
            <p>{AllInformationJS.texts.aboutUsText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
