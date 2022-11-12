import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

import data from "../../api/data.json";
import CrewContent from "../../components/CrewContent";
import Navbar from "../../components/Navbar";

import bgDesktop from "../../assets/crew/background-crew-desktop.jpg";

import styles from './styles.module.scss'

export default function App() {
  return (
    <div className={styles.crew} style={{ backgroundImage: `url(${bgDesktop.src})` }}>
      <Navbar />
      <div className={styles.crew_container}>
        <main className={styles.crew_content}>
          <h1>Meet your crew</h1>
          <Swiper
            cssMode={true}
            pagination={{ clickable: true }}
            mousewheel={true}
            keyboard={true}
            modules={[Pagination, Mousewheel, Keyboard]}
            className={styles.mySwiper}
          >
            {data.crew.map((crew) => (
              <SwiperSlide><CrewContent crew={crew} /></SwiperSlide>
            ))}
          </Swiper>
        </main>
      </div>
    </div>
  );
}
