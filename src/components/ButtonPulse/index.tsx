import styles from "./styles.module.scss";
import type {ReactNode} from "react";

type ButtonPulse={
    children: ReactNode;
}
const ButtonPulse = ({children}: ButtonPulse) => {
  return (
    <a href="/destination" className={styles.pulse_button}>
      {children}
    </a>
  );
};
export default ButtonPulse;
