import React, { useEffect, useState } from "react";
import styles from "./HamburgerBar.module.scss";
import AllInformationJS from "../../informations";

export default function HamburgerBar({
  closeDropdown,
  toggleDropdown,
  dropdownVisible,
  handleClick,
}) {
  const refreshPage = () => {
    window.location.reload();
  };
  useEffect(() => {
    const body = document.querySelector("body");
    if (dropdownVisible) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
    return () => {
      body.style.overflow = "auto";
    };
  }, [dropdownVisible]);

  return (
    <section className={styles.navbarContainer}>
      <button
        className={`${styles.hamburger} ${
          dropdownVisible ? styles.is_active : ""
        }`}
        onClick={toggleDropdown}
      >
        <div className={styles.bar}>{AllInformationJS.texts.menuWord}</div>
      </button>
      <div
        className={`${styles.mobile_nav} ${
          dropdownVisible ? styles.is_active : ""
        }`}
      >
        <div className={styles.XiconElement}>
          <img
            onClick={closeDropdown}
            src={AllInformationJS.Icons.XIcon}
            alt="X Icon"
          />
        </div>
        <ul className={styles.textsInMenu}>
          <li onClick={closeDropdown}>
            <a onClick={refreshPage}>{AllInformationJS.texts.homePage}</a>
          </li>
          <li onClick={closeDropdown}>
            <a onClick={() => handleClick("projectsRef")}>
              {AllInformationJS.texts.projects}
            </a>
          </li>
          <li onClick={closeDropdown}>
            <a onClick={() => handleClick("vlogRef")}>
              {AllInformationJS.texts.vlog}
            </a>
          </li>
          <li onClick={closeDropdown}>
            <a onClick={() => handleClick("whereToFindRef")}>
              {AllInformationJS.texts.whereToFind}
            </a>
          </li>
          {/* <li onClick={closeDropdown}>
            <a onClick={() => handleClick("customerReviewsRef")}>
              {AllInformationJS.texts.customerReviews}
            </a>
          </li> */}
          <li onClick={closeDropdown}>
            <a onClick={() => handleClick("aboutUsRef")}>
              {AllInformationJS.texts.aboutUs}
            </a>
          </li>
          <li onClick={closeDropdown}>
            <a onClick={() => handleClick("contactWithUsRef")}>
              {AllInformationJS.texts.contactWithUs}
            </a>
          </li>
          <button className={styles.buttonContainer}>
            <div className={styles.buttonElements}>
              <img
                src={AllInformationJS.Icons.shoppingCardIcon}
                alt="Shopping Icon"
              />
              <p>{AllInformationJS.texts.addressWood}</p>
            </div>
          </button>
        </ul>
      </div>
    </section>
  );
}
