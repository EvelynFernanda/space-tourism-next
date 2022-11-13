import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Mousewheel, Keyboard } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

import data from "../../api/data.json";
import CrewContent from "../../components/CrewContent";
import Navbar from "../../components/Navbar";

import bgDesktop from "../../assets/crew/background-crew-desktop.jpg";

import styles from "./styles.module.scss";
import FadeIn from "react-fade-in";

export default function App() {
  return (
    <div
      className={styles.crew}
      style={{ backgroundImage: `url(${bgDesktop.src})` }}
    >
      <Navbar />
      <div className={styles.crew_container}>
        <FadeIn>
          <main className={styles.crew_content}>
            <h1>Meet your crew</h1>
            <Swiper
              cssMode={true}
              pagination={{ clickable: true }}
              navigation={true}
              mousewheel={true}
              keyboard={true}
              modules={[Pagination, Navigation, Mousewheel, Keyboard]}
              className={styles.mySwiper}
            >
              {data.crew.map((crew) => (
                <SwiperSlide>
                  <CrewContent crew={crew} />
                </SwiperSlide>
              ))}
            </Swiper>
          </main>
        </FadeIn>
      </div>
    </div>
  );
}
