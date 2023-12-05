import styles from "./ThirdNavbarMenu.module.scss";
import AllInformationJS from "../../informations";

export default function ThirdNavbarMenu({
  handleClick,
  closeThirdNavbarDropdown,
}) {
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <div className={styles.dropDownNavbarElement}>
      <ul className={styles.menuBar}>
        <li onClick={refreshPage}>
          <a>{AllInformationJS.texts.homePage}</a>
        </li>
        <li onClick={closeThirdNavbarDropdown}>
          <a onClick={() => handleClick("projectsRef")}>
            {AllInformationJS.texts.projects}
          </a>
        </li>
        <li onClick={closeThirdNavbarDropdown}>
          <a onClick={() => handleClick("vlogRef")}>
            {AllInformationJS.texts.vlog}
          </a>
        </li>
        <li onClick={closeThirdNavbarDropdown}>
          <a onClick={() => handleClick("whereToFindRef")}>
            {AllInformationJS.texts.whereToFind}
          </a>
        </li>
        {/* <li onClick={closeThirdNavbarDropdown}>
          <a onClick={() => handleClick("customerReviewsRef")}>
            {AllInformationJS.texts.customerReviews}
          </a>
        </li> */}
        <li onClick={closeThirdNavbarDropdown}>
          <a onClick={() => handleClick("aboutUsRef")}>
            {AllInformationJS.texts.aboutUs}
          </a>
        </li>
        <li onClick={closeThirdNavbarDropdown}>
          <a onClick={() => handleClick("contactWithUsRef")}>
            {AllInformationJS.texts.contactWithUs}
          </a>
        </li>
      </ul>
    </div>
  );
}
