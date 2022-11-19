import useMobile from "../../hooks/useMobile";
import styles from "./styles.module.scss";

const Footer = () => {
  const { isMobile } = useMobile();

  return (
    <footer className={styles.footer}>
      <a
        style={isMobile ? { position: "unset" } : { position: "absolute" }}
        href="https://www.linkedin.com/in/evelyn-fernanda-cardoso/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>
          Created by <strong>Evelyn Cardoso</strong> - 2022
        </p>
      </a>
    </footer>
  );
};
export default Footer;
