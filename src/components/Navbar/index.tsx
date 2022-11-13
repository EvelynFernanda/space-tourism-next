import { useRouter } from "next/router";
import Link from "next/link";

import LogoSvg from "../../assets/shared/logo-svg.svg";

import styles from "./styles.module.scss";

const Navbar = () => {
  const router = useRouter();

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
    <div className={styles.navbar_container}>
      <LogoSvg />
      <ul className={styles.navbar_items}>
        {navContent.map((nav) => (
          <li
            aria-selected={router.pathname == nav.pathname ? "true" : "false"}
          >
            <Link href={nav.pathname}>{nav.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
