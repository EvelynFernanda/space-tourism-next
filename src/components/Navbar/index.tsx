import styles from "./styles.module.scss";
import { useRouter } from 'next/router'
import LogoSvg from "../../assets/shared/logo-svg.svg";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter()

  return (
    <div className={styles.navbar_container}>
    <LogoSvg />
      <ul className={styles.navbar_items}>
        <li aria-selected={router.pathname == '/' ? 'true' : 'false'}><Link href="/" >HOME</Link></li>
        <li aria-selected={router.pathname == '/destination' ? 'true' : 'false'}><Link href="/destination/">DESTINATION</Link></li>
        <li aria-selected={router.pathname == '/crew' ? 'true' : 'false'}><Link href="/crew/">CREW</Link></li>
        <li aria-selected={router.pathname == '/technology' ? 'true' : 'false'}><Link href="/technology/">TECHNOLOGY</Link></li>
      </ul>
    </div>
  );
};
// {router.pathname == '/destination/' ? 'true' : 'false'}

export default Navbar;
