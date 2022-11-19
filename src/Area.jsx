import Data from "./Data";
import "./Area.css";
import View from "./View";

const Area = (props) => {
  return (
    <>
      <div className="areaContainer">
        {Data[props.place].map((place) => {
          return (
            <View
              key={place.id}
              name={place.name}
              img={place.img}
              rating={place.rating}
              loc={place.loc}
            />
          );
        })}
      </div>
    </>
  );
};

export default Area;
