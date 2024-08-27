import React from "react";
import { useLocation } from "react-router-dom";

function Information() {
  const loca = useLocation();
  const showInfo = loca?.state;
  console.log(showInfo);
  return (
    <div>
      <div>{showInfo}</div>
    </div>
  );
}

export default Information;
