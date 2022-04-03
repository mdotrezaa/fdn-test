import React, { useState } from "react";

function Text(props) {
  const Heading = props.headingLevel;
  const { children, type, color, size } = props;
  return <Heading className={`text-${type} text-${size}`}>{children}</Heading>;
}

export default Text;
