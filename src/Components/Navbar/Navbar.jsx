import { useState } from "react";
import Icons from "./Icons";
import Menu from "./Menu";
import styles from "./Navbar.module.scss";
import ThirdNavbarMenu from "./ThirdNavbarMenu";
import HamburgerBar from "./HamburgerBar";

export default function Navbar({ handleClick }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropDownNavbarVisible, setDropDownNavbarVisible] = useState(false);

  function toggleDropdown() {
    setDropdownVisible(!dropdownVisible);
  }

  function closeDropdown() {
    setDropdownVisible(false);
  }

  function closeThirdNavbarDropdown() {
    setDropDownNavbarVisible(false);
  }

  function toggleDropDownNavbar() {
    setDropDownNavbarVisible(!dropDownNavbarVisible);
  }

  return (
    <header className={styles.headerContainer}>
      <Icons />
      <Menu
        toggleDropDownNavbar={toggleDropDownNavbar}
        handleClick={handleClick}
      />
      <HamburgerBar
        closeDropdown={closeDropdown}
        toggleDropdown={toggleDropdown}
        dropdownVisible={dropdownVisible}
        handleClick={handleClick}
      />
      <div
        className={`${styles.dropDownMenu}${
          dropDownNavbarVisible ? styles.activeMenu : ""
        }`}
      >
        <ThirdNavbarMenu
          handleClick={handleClick}
          closeThirdNavbarDropdown={closeThirdNavbarDropdown}
        />
      </div>
    </header>
  );
}
