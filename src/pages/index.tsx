import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import bgDestkop from "../assets/home/background-home-desktop.jpg"

import styles from "./styles.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.home} style={{backgroundImage: `url(${bgDestkop.src})`}}>
      <Navbar />
    </div>
  );
};

export default Home;
