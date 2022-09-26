import data from "../../api/data.json";

import styles from "./styles.module.scss";

type destinationInformationType = {
  destinationState: string;
  useDestinationState: (arg: string) => void;
};

const DestinationInformation = ({
  destinationState,
  useDestinationState,
}: destinationInformationType) => {
  return (
    <div className={styles.destinationInformation}>
      <div className={styles.destinationInformation_nav}>
        {data.destinations.map((destination) => (
          <button
            className={styles.destinationInformation_nav_button}
            value={destination.name}
            onClick={(event) => useDestinationState(event.currentTarget.value)}
          >
            {destination.name.toLocaleUpperCase()}
          </button>
        ))}
      </div>
      {data.destinations.map((destination) => (
        <div
          style={
            destinationState == destination.name
              ? { display: "initial" }
              : { display: "none" }
          }
        >
          <p>{destination.name}</p>
          <p>{destination.description}</p>
          <p>{destination.distance}</p>
          <p>{destination.travel}</p>
        </div>
      ))}
    </div>
  );
};

export default DestinationInformation;
