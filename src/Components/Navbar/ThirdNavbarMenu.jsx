import styles from "./ThirdNavbarMenu.module.scss";
import AllInformationJS from "../../informations";

export default function ThirdNavbarMenu() {
  return (
    <div className={styles.dropDownNavbarElement}>
      <div className={styles.menuBar}>
        <a href="#">{AllInformationJS.texts.homePage}</a>
        <a href="#">{AllInformationJS.texts.projects}</a>
        <a href="#">{AllInformationJS.texts.whereToFind}</a>
        <a href="#">{AllInformationJS.texts.vlog}</a>
        <a href="#">{AllInformationJS.texts.customerReviews}</a>
        <a href="#">{AllInformationJS.texts.contactWithUs}</a>
      </div>
    </div>
  );
}
