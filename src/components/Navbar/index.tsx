import styles from "./styles.module.scss";
import LogoSvg from "../../assets/shared/logo-svg.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
    <LogoSvg />
      <ul className={styles.navbar_items}>
        <li><Link href="/" >HOME</Link></li>
        <li><Link href="/destination/">DESTINATION</Link></li>
        <li><Link href="/">CREW</Link></li>
        <li><Link href="/">TECHNOLOGY</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
