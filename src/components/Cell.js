import React from "react";

function Cell({ key, children }) {
  return <td key={key}>{children}</td>;
}

export default Cell;
