import { Swiper, SwiperSlide } from "swiper/react";
import useMobile from "../../hooks/useMobile";
import { Pagination, Navigation, Mousewheel, Keyboard } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

import data from "../../api/data.json";
import CrewContent from "../../components/CrewContent";
import bgDesktop from "../../assets/crew/background-crew-desktop-min.jpg";
import Layout from "../../components/Layout";

import styles from "./styles.module.scss";
import FadeIn from "react-fade-in";

export default function Crew() {
  const { isMobile } = useMobile();

  return (
    <div
      className={styles.crew}
      style={{ backgroundImage: `url(${bgDesktop.src})` }}
    >
      <Layout>
        <div className={styles.crew_container}>
          <FadeIn>
            <main className={styles.crew_content}>
            <h1 style={!isMobile ? {display: 'none'} : {display: 'block'}}>Meet your crew</h1>
              <Swiper
                cssMode={true}
                pagination={{ clickable: true }}
                navigation={true}
                mousewheel={true}
                keyboard={true}
                modules={[Pagination, Navigation, Mousewheel, Keyboard]}
                className={styles.mySwiper}
              >
                {data.crew.map((crew, index) => (
                  <SwiperSlide key={index}>
                    <CrewContent crew={crew} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </main>
          </FadeIn>
        </div>
      </Layout>
    </div>
  );
}
