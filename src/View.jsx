import "./Area.css";
const View = (props) => {
  return (
    <>
      <div
        className="viewContainer"
        onClick={() => {
          window.open(props.loc, "_blank");
        }}
      >
        <img
          src={props.img}
          alt="img"
          style={{
            height: "250px",
            width: "350px",
            borderRadius: "10px",
            marginTop: "10px",
          }}
        />
        <h3>{props.name}</h3>
        <p>{props.rating}/5</p>
      </div>
    </>
  );
};

export default View;
