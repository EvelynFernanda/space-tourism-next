import data from "../../api/data.json";

import styles from "./styles.module.scss";

type destinationInformationType = {
  destinationState: string;
  setDestinationState: (arg: string) => void;
};

const DestinationInformation = ({
  destinationState,
  setDestinationState,
}: destinationInformationType) => {
  return (
    <div className={styles.destinationInformation}>
      <div className={styles.destinationInformation_nav}>
        {data.destinations.map((destination, index) => (
          <button
            style={
              destinationState == destination.name
                ? {
                    borderBottomColor: "white",
                  }
                : {
                    color: "#D0D6F9",
                    borderBottomColor: "transparent",
                  }
            }
            className={styles.destinationInformation_nav_button}
            value={destination.name}
            key={index}
            onClick={(event) => setDestinationState(event.currentTarget.value)}
          >
            {destination.name.toLocaleUpperCase()}
          </button>
        ))}
      </div>
      {data.destinations.map((destination, index) => (
        <div
          key={index}
          className={styles.destinationInformation_content}
          style={
            destinationState == destination.name
              ? { display: "initial" }
              : { display: "none" }
          }
        >
          <h2>{destination.name.toUpperCase()}</h2>
          <h3>{destination.description}</h3>
          <div className={styles.destinationInformation_content_distance}>
            <div
              className={styles.destinationInformation_content_distance_item}
            >
              <h5>AVG. DISTANCE</h5>
              <p>{destination.distance}</p>
            </div>
            <div
              className={styles.destinationInformation_content_distance_item}
            >
              <h5>Est. travel time</h5>
              <p>{destination.travel}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DestinationInformation;
