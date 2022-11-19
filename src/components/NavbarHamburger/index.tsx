import { useState } from "react";
import Link from "next/link";

import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import LogoSvg from "../../assets/shared/logo-svg.svg";

import styles from "./styles.module.scss";

type navContentType = {
  navContent: {
    pathname: string;
    name: string;
  }[];
};

const NavbarHamburger = ({ navContent }: navContentType) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <>
      <div className={styles.navbarHamburger}>
        <LogoSvg className={styles.logo} />
        {!isOpen && <FiMenu className={styles.iconMenu} onClick={toggleOpen} />}
      </div>
      {isOpen && (
        <div className={styles.navbarHamburger_container}>
          <AiOutlineClose className={styles.iconMenu} onClick={toggleOpen} />
          <ul className={styles.navbarHamburger_items}>
            {navContent.map((nav, index) => (
              <li key={index}>
                <Link href={nav.pathname}>{nav.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default NavbarHamburger;
