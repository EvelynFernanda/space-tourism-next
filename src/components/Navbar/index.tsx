import styles from "./styles.module.scss";
import LogoSvg from "../../assets/shared/logo-svg.svg";

const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
    <LogoSvg />
      <ul className={styles.navbar_items}>
        <li><a href="/">HOME</a></li>
        <li><a href="/">DESTINATION</a></li>
        <li><a href="/">CREW</a></li>
        <li><a href="/">TECHNOLOGY</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
