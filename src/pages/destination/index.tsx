import { useState } from "react";
import Image from "next/image";
import type { NextPage } from "next";
import FadeIn from "react-fade-in";

import Navbar from "../../components/Navbar";
import DestinationInformation from "../../components/DestinationInformation";

import bgDesktop from "../../assets/destination/background-destination-desktop.jpg";
import moon from "../../assets/destination/image-moon.webp";
import europa from "../../assets/destination/image-europa.webp";
import mars from "../../assets/destination/image-mars.webp";
import titan from "../../assets/destination/image-titan.webp";

import styles from "./styles.module.scss";

const Destination: NextPage = () => {
  const [destinationState, useDestinationState] = useState("Moon");

  return (
    <div
      className={styles.destination}
      style={{ backgroundImage: `url(${bgDesktop.src})` }}
    >
      <Navbar  />
      <FadeIn>
        <main className={styles.destination_container}>
          <div className={styles.destination_content}>
            <h1>Pick your destination</h1>
            {destinationState == "Moon" && <Image src={moon} alt="moon" height={420} width={420} />}
            {destinationState == "Mars" && <Image src={mars} alt="mars" height={420} width={420} />}
            {destinationState == "Europa" && <Image src={europa} alt="europa" height={420} width={420} />}
            {destinationState == "Titan" && <Image src={titan} alt="titan" height={420} width={420} />}
          </div>
          <DestinationInformation
            destinationState={destinationState}
            useDestinationState={useDestinationState}
          />
        </main>
      </FadeIn>
    </div>
  );
};

export default Destination;
