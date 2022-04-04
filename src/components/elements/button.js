import React, { useState } from "react";

function Button(props) {
  const [size] = useState(props.size);
  const [variant] = useState(props.variant);
  const [position] = useState(props.position);
  return (
    <button
      onClick={props.onClick}
      className={`btn btn-${variant} btn-${size} btn-${position}`}>
      {props.children}
    </button>
  );
}
export default Button;
