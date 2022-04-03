function Ads(props) {
  return (
    <div
      className="ads--tag"
      style={{ width: props.width + "px", height: props.height + "px" }}
    >
      <span>
        {props.title + " "}
        {props.width + " x " + props.height}
      </span>
    </div>
  );
}
export default Ads;
