import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import FadeIn from "react-fade-in";

import Navbar from "../../components/Navbar";
import DestinationInformation from "../../components/DestinationInformation";

import bgDesktop from "../../assets/destination/background-destination-desktop.jpg";
import moon from "../../assets/destination/image-moon.webp";
import europa from "../../assets/destination/image-europa.webp";
import mars from "../../assets/destination/image-mars.webp";
import titan from "../../assets/destination/image-titan.webp";

import styles from "./styles.module.scss";
import { useRouter } from "next/router";

const Destination: NextPage = () => {
  const [destinationState, setDestinationState] = useState("Moon");
  const router = useRouter();
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 700;
    setMobile(isMobile);
  }, []);

  return (
    <div
      className={styles.destination}
      style={{ backgroundImage: `url(${bgDesktop.src})` }}
    >
      <Navbar />
      <FadeIn>
        <main className={styles.destination_container}>
          <div className={styles.destination_content}>
            <h1>Pick your destination</h1>
            {destinationState == "Moon" && (
              <Image
                src={moon}
                alt="moon"
                height={mobile ? 200 : 420}
                width={mobile ? 200 : 420}
              />
            )}
            {destinationState == "Mars" && (
              <Image
                src={mars}
                alt="mars"
                height={mobile ? 200 : 420}
                width={mobile ? 200 : 420}
              />
            )}
            {destinationState == "Europa" && (
              <Image
                src={europa}
                alt="europa"
                height={mobile ? 200 : 420}
                width={mobile ? 200 : 420}
              />
            )}
            {destinationState == "Titan" && (
              <Image
                src={titan}
                alt="titan"
                height={mobile ? 200 : 420}
                width={mobile ? 200 : 420}
              />
            )}
          </div>
          <DestinationInformation
            destinationState={destinationState}
            setDestinationState={setDestinationState}
          />
        </main>
      </FadeIn>
    </div>
  );
};

export default Destination;
