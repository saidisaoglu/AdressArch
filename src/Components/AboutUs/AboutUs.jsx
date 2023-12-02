import React from "react";
import AllInformationJS from "../../informations";
import styles from "./AboutUs.module.scss";

export default function AboutUs() {
  return (
    <section className={styles.aboutUsContainer}>
      <div className={styles.aboutUsWrapper}>
        <div className={styles.headerContainer}>
          <p>{AllInformationJS.texts.aboutUs}</p>
        </div>
        <div className={styles.imageAndTextContainer}>
          <img
            src={AllInformationJS.AboutUsInformations.aboutUsImage}
            alt="About Us"
          />
          <div className={styles.textContainer}>
            <p>{AllInformationJS.texts.userName}</p>
            <p>{AllInformationJS.texts.aboutUsText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
