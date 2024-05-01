import React from "react";

const Display = ({ expression }) => {
  return <input type="text" value={expression} readOnly />;
};

export default Display;
