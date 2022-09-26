import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import bgDesktop from "../assets/home/background-home-desktop.jpg";

import styles from "./styles.module.scss";
import ButtonPulse from "../components/ButtonPulse";
import FadeIn from "react-fade-in";

const Home: NextPage = () => {
  return (
    <div
      className={styles.home}
      style={{ backgroundImage: `url(${bgDesktop.src})` }}
    >
      <Navbar />
      <main className={styles.home_container}>
        <FadeIn>
        <div className={styles.home_content}>
          <h3>SO, YOU WANT TO TRAVEL TO</h3>
          <h1>SPACE</h1>
         
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        </FadeIn>
        <ButtonPulse >EXPLORE</ButtonPulse>
      </main>
    </div>
  );
};

export default Home;
