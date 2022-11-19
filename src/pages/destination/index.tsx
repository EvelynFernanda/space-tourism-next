import useMobile from "../../hooks/useMobile";
import { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import FadeIn from "react-fade-in";

import Layout from "../../components/Layout";
import DestinationInformation from "../../components/DestinationInformation";

import bgDesktop from "../../assets/destination/background-destination-desktop-min.jpg";
import moon from "../../assets/destination/image-moon.webp";
import europa from "../../assets/destination/image-europa.webp";
import mars from "../../assets/destination/image-mars.webp";
import titan from "../../assets/destination/image-titan.webp";
import styles from "./styles.module.scss";

const Destination: NextPage = () => {
  const [destinationState, setDestinationState] = useState("Moon");
  const { isMobile } = useMobile();

  return (
    <div
      className={styles.destination}
      style={{ backgroundImage: `url(${bgDesktop.src})` }}
    >
      <Layout>
        <FadeIn>
          <main className={styles.destination_container}>
            <div className={styles.destination_content}>
              <h1>Pick your destination</h1>
              {destinationState == "Moon" && (
                <FadeIn>
                  <Image
                    src={moon}
                    alt="moon"
                    height={isMobile ? 200 : 420}
                    width={isMobile ? 200 : 420}
                  />
                </FadeIn>
              )}
              {destinationState == "Mars" && (
                <FadeIn>
                  <Image
                    src={mars}
                    alt="mars"
                    height={isMobile ? 200 : 420}
                    width={isMobile ? 200 : 420}
                  />
                </FadeIn>
              )}
              {destinationState == "Europa" && (
                <FadeIn>
                  <Image
                    src={europa}
                    alt="europa"
                    height={isMobile ? 200 : 420}
                    width={isMobile ? 200 : 420}
                  />
                </FadeIn>
              )}
              {destinationState == "Titan" && (
                <FadeIn>
                  <Image
                    src={titan}
                    alt="titan"
                    height={isMobile ? 200 : 420}
                    width={isMobile ? 200 : 420}
                  />
                </FadeIn>
              )}
            </div>
            <DestinationInformation
              destinationState={destinationState}
              setDestinationState={setDestinationState}
            />
          </main>
        </FadeIn>
      </Layout>
    </div>
  );
};

export default Destination;
