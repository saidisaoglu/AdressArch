import styles from "./Menu.module.scss";
import AllInformationJS from "../../informations";
import DropDownLanguage from "./DropDownLanguage";

export default function Menu({ toggleDropDownNavbar, handleClick }) {
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <div className={styles.menuContainer}>
      <div className={styles.addressElement}>
        <img
          onClick={refreshPage}
          src={AllInformationJS.Icons.addressLogo}
          alt="Address Logo"
        />
      </div>
      <div className={styles.textsElement}>
        <div>
          <a onClick={refreshPage}>{AllInformationJS.texts.homePage}</a>
        </div>
        <div>
          <a onClick={() => handleClick("projectsRef")}>
            {AllInformationJS.texts.projects}
          </a>
        </div>
        <div>
          <a onClick={() => handleClick("vlogRef")}>
            {AllInformationJS.texts.vlog}
          </a>
        </div>
        <div>
          <a onClick={() => handleClick("whereToFindRef")}>
            {AllInformationJS.texts.whereToFind}
          </a>
        </div>
        {/* <div>
          <a onClick={() => handleClick("customerReviewsRef")}>
            {AllInformationJS.texts.customerReviews}
          </a>
        </div> */}
        <div>
          <a onClick={() => handleClick("aboutUsRef")}>
            {AllInformationJS.texts.aboutUs}
          </a>
        </div>
        <div>
          <a onClick={() => handleClick("contactWithUsRef")}>
            {AllInformationJS.texts.contactWithUs}
          </a>
        </div>
      </div>
      <div className={styles.languageAndButtonElements}>
        <div className={styles.dropdownElement1440}>
          {/* <DropDownLanguage /> */}
        </div>
        <button className={styles.iconAndTextButton}>
          <div className={styles.buttonElements}>
            <img
              src={AllInformationJS.Icons.shoppingCardIcon}
              alt="Shopping Card Icon"
            />
            <p>{AllInformationJS.texts.addressWood}</p>
          </div>
        </button>
      </div>
      <div className={styles.dropdownAndMenuBar}>
        <div className={styles.dropdownElement}>
          {/* <DropDownLanguage /> */}
        </div>
        <button className={styles.iconAndTextButton768}>
          <div className={styles.buttonElements}>
            <img
              src={AllInformationJS.Icons.shoppingCardIcon}
              alt="Shopping Card Icon"
            />
            <p>{AllInformationJS.texts.addressWood}</p>
          </div>
        </button>
        <div className={styles.menuBarElement}>
          <p className={styles.secondMenuText} onClick={toggleDropDownNavbar}>
            {AllInformationJS.texts.menuWord}
          </p>
        </div>
      </div>
    </div>
  );
}
