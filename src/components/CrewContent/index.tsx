import Image from "next/image";

import ImgDouglas from "../../assets/crew/image-douglas-hurley.png";
import ImgAnousheh from "../../assets/crew/image-anousheh-ansari.png";
import ImgMark from "../../assets/crew/image-mark-shuttleworth.png";
import ImgVictor from "../../assets/crew/image-victor-glover.png";

import styles from "./styles.module.scss";

type crewContentType = {
  crew: {
    name: string;
    images: {
      png: string;
      webp: string;
    };
    role: string;
    bio: string;
  };
};

const CrewContent = ({ crew }: crewContentType) => {
  return (
    <div className={styles.crewContent}>
      <div className={styles.crewContent_description}>
        <h3>{crew.role.toUpperCase()}</h3>
        <h2>{crew.name.toUpperCase()}</h2>
        <p>{crew.bio}</p>
      </div>
      <div className={styles.crewContent_images}>
        {crew.name == "Douglas Hurley" && (
          <Image
            src={ImgDouglas}
            alt="Douglas Hurley"
            height={556}
            width={453}
          />
        )}
        {crew.name == "Mark Shuttleworth" && (
          <Image
            src={ImgMark}
            alt="Mark Shuttleworth"
            height={556}
            width={453}
          />
        )}
        {crew.name == "Victor Glover" && (
          <Image src={ImgVictor} alt="Victor Glover" height={556} width={554} />
        )}
        {crew.name == "Anousheh Ansari" && (
          <Image
            src={ImgAnousheh}
            alt="Anousheh Ansari"
            height={556}
            width={453}
          />
        )}
      </div>
    </div>
  );
};

export default CrewContent;
