import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import LogoSvg from "../../assets/shared/logo-svg.svg";

import styles from "./styles.module.scss";
import NavbarHamburger from "../NavbarHamburger";

const Navbar = () => {
  const router = useRouter();
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 700;
    setMobile(isMobile);
  }, []);

  const navContent = [
    {
      pathname: "/",
      name: "HOME",
    },
    {
      pathname: "/destination",
      name: "DESTINATION",
    },
    {
      pathname: "/crew",
      name: "CREW",
    },
    {
      pathname: "/technology",
      name: "TECHNOLOGY",
    },
  ];

  return (
    <>
      {mobile ? (
        <NavbarHamburger navContent={navContent} />
      ) : (
        <div className={styles.navbar_container}>
          <LogoSvg className={styles.logo} />
          <ul className={styles.navbar_items}>
            {navContent.map((nav, index) => (
              <li
                key={index}
                aria-selected={
                  router.pathname == nav.pathname ? "true" : "false"
                }
              >
                <Link href={nav.pathname}>{nav.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
