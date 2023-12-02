import styles from "./MenuBarForMobile.module.scss";
import AllInformationJS from "../../informations";

export default function MenuForMobile({ closeDropdown }) {
  return (
    <div className={styles.dropdownElement}>
      <div className={styles.XiconElement}>
        <img
          onClick={closeDropdown}
          src={AllInformationJS.Icons.XIcon}
          alt="X Icon"
        />
      </div>
      <div className={styles.textsInMenu}>
        <a>{AllInformationJS.texts.homePage}</a>
        <a>{AllInformationJS.texts.projects}</a>
        <a>{AllInformationJS.texts.whereToFind}</a>
        <a>{AllInformationJS.texts.vlog}</a>
        <a>{AllInformationJS.texts.customerReviews}</a>
        <a>{AllInformationJS.texts.contactWithUs}</a>
        <button className={styles.buttonContainer}>
          <div className={styles.buttonElements}>
            <img
              src={AllInformationJS.Icons.shoppingCardIcon}
              alt="Shopping Icon"
            />
            <p>{AllInformationJS.texts.addressWood}</p>
          </div>
        </button>
      </div>
    </div>
  );
}
