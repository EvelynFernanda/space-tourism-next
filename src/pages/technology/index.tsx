import { useState } from "react";
import Image from "next/image";
import type { NextPage } from "next";
import FadeIn from "react-fade-in";

import Navbar from "../../components/Navbar";
import TechnologyInformation from "../../components/TechnologyInformation";
import data from "../../api/data.json";

import bgDesktop from "../../assets/technology/background-technology-desktop.jpg";
import launch from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceport from "../../assets/technology/image-spaceport-portrait.jpg";
import capsule from "../../assets/technology/image-space-capsule-portrait.jpg";

import styles from "./styles.module.scss";

const Technology: NextPage = () => {
  const [technologyState, setTechnologyState] = useState("Launch");

  return (
    <div
      className={styles.technology}
      style={{ backgroundImage: `url(${bgDesktop.src})` }}
    >
      <Navbar />
      <FadeIn>
          <h1>SPACE LAUNCH 101</h1>
        <main className={styles.technology_container}>
          <div className={styles.technology_content}>
            <TechnologyInformation
              technologyState={technologyState}
              setTechnologyState={setTechnologyState}
            />
          </div>

          <div className={styles.technology_imageContainer}>
            {technologyState == data.technology[0].name.split(" ")[0] && (
              <Image src={launch} alt="launch" height={500} width={500} />
            )}
            {technologyState == data.technology[1].name.split(" ")[0] && (
              <Image src={spaceport} alt="spaceport" height={500} width={500} />
            )}
            {technologyState == data.technology[2].name.split(" ")[0] && (
              <Image src={capsule} alt="capsule" height={500} width={500} />
            )}
          </div>
        </main>
      </FadeIn>
    </div>
  );
};

export default Technology;