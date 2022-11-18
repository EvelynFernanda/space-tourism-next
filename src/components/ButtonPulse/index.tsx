import styles from "./styles.module.scss";
import type { ReactNode } from "react";
import Link from "next/link";

type ButtonPulse = {
  children: ReactNode;
};
const ButtonPulse = ({ children }: ButtonPulse) => {
  return (
    <Link href="/destination">
      <div className={styles.pulse_button}>{children}</div>
    </Link>
  );
};
export default ButtonPulse;
