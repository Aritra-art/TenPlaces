import Data from "./Data";
import "./places.css";
import Area from "./Area";
import { useState } from "react";

const Places = () => {
  const [stateName, setStateName] = useState("Kolkata");
  function placeEventHandler(event) {
    setStateName(event.target.textContent);
  }

  return (
    <>
      <div className="placeContainer">
        {Object.keys(Data).map((place, index) => {
          if (place === stateName) {
            return (
              <span key={index} onClick={placeEventHandler} className="spanBg">
                {place}
              </span>
            );
          }
          return (
            <span key={index} onClick={placeEventHandler}>
              {place}
            </span>
          );
        })}
      </div>
      <Area place={stateName} />
    </>
  );
};

export default Places;
