import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="https://www.linkedin.com/in/evelyn-fernanda-cardoso/" target='_blank'>
        {" "}
        <p>
          {" "}
          Criado por <strong>Evelyn Cardoso</strong> - 2022
        </p>
      </a>
    </footer>
  );
};
export default Footer;
