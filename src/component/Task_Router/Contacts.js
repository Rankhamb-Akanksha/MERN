import React from "react";

import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Contacts() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log("The state from parent is :", location?.state);

  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <div>
      <button type="button" onClick={handleNavigate}>Go Back</button>
    </div>
  );
}

export default Contacts;
