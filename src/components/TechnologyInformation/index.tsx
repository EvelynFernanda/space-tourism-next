import FadeIn from "react-fade-in";
import data from "../../api/data.json";

import styles from "./styles.module.scss";

type TechnologyInformationType = {
  technologyState: string;
  setTechnologyState: (arg: string) => void;
};

const TechnologyInformation = ({
  technologyState,
  setTechnologyState,
}: TechnologyInformationType) => {
  return (
    <div className={styles.technologyInformation}>
      <div className={styles.technologyInformation_nav}>
        {data.technology.map((technology, index) => (
          <button
            key={index}
            aria-checked
            style={
              technologyState == technology.name.split(" ")[0]
                ? {
                    backgroundColor: "white",
                    color: "black",
                  }
                : {
                    color: "white",
                    backgroundColor: "transparent",
                  }
            }
            className={styles.technologyInformation_nav_button}
            value={technology.name.split(" ")[0]}
            onClick={(event) => setTechnologyState(event.currentTarget.value)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      {data.technology.map((technology, index) => (
        <div
          key={index}
          className={styles.technologyInformation_content}
          style={
            technologyState == technology.name.split(" ")[0]
              ? { display: "initial" }
              : { display: "none" }
          }
        >
          <FadeIn>
            <p>THE TERMINOLOGY…</p>
            <h2>{technology.name.toUpperCase()}</h2>
            <h3>{technology.description}</h3>
          </FadeIn>
        </div>
      ))}
    </div>
  );
};

export default TechnologyInformation;
