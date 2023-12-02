import styles from "./Menu.module.scss";
import AllInformationJS from "../../informations";
import DropDownLanguage from "./DropDownLanguage";

export default function Menu({ toggleDropdown, toggleDropDownNavbar }) {
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
          <a href="" onClick={refreshPage}>
            {AllInformationJS.texts.homePage}
          </a>
        </div>
        <div>
          <a href="">{AllInformationJS.texts.projects}</a>
        </div>
        <div>
          <a href="#">{AllInformationJS.texts.whereToFind}</a>
        </div>
        <div>
          <a href="#">{AllInformationJS.texts.vlog}</a>
        </div>
        <div>
          <a href="#">{AllInformationJS.texts.customerReviews}</a>
        </div>
        <div>
          <a href="#">{AllInformationJS.texts.contactWithUs}</a>
        </div>
      </div>
      <div className={styles.languageAndButtonElements}>
        <div className={styles.dropdownElement1440}>
          <DropDownLanguage />
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
          <DropDownLanguage />
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
          <p className={styles.firstMenuText} onClick={toggleDropdown}>
            {AllInformationJS.texts.menuWord}
          </p>
          <p className={styles.secondMenuText} onClick={toggleDropDownNavbar}>
            {AllInformationJS.texts.menuWord}
          </p>
        </div>
      </div>
    </div>
  );
}
