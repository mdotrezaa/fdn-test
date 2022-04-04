function Ads(props) {
  return (
    <div
      className='ads--tag'
      style={{
        width: props.width + "px",
        height: props.height + "px",
        textAlign: "center"
      }}>
      <span>
        {props.title + " "}
        {props.width + " x " + props.height}
        <br />
        {props.type == "internal" ? "(Internal Campaign Only)" : ""}
      </span>
    </div>
  );
}
export default Ads;
