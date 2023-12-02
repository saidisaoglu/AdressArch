import { useState } from "react";
import Icons from "./Icons";
import Menu from "./Menu";
import styles from "./Navbar.module.scss";
import MenuForMobile from "./MenuBarForMobile";
import ThirdNavbarMenu from "./ThirdNavbarMenu";

export default function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropDownNavbarVisible, setDropDownNavbarVisible] = useState(false);

  function toggleDropdown() {
    setDropdownVisible(!dropdownVisible);
  }

  function closeDropdown() {
    setDropdownVisible(false);
  }

  function toggleDropDownNavbar() {
    setDropDownNavbarVisible(!dropDownNavbarVisible);
  }

  return (
    <header className={styles.headerContainer}>
      <Icons />
      <Menu
        toggleDropdown={toggleDropdown}
        toggleDropDownNavbar={toggleDropDownNavbar}
      />
      <div
        className={`${styles.dropdown}${dropdownVisible ? styles.active : ""}`}
      >
        <MenuForMobile closeDropdown={closeDropdown} />
      </div>
      <div
        className={`${styles.dropDownMenu}${
          dropDownNavbarVisible ? styles.activeMenu : ""
        }`}
      >
        <ThirdNavbarMenu />
      </div>
    </header>
  );
}
