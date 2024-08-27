import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function PageTwo() {
  const location = useLocation();
  console.log("the location of the component", location.state);
  const navigate = useNavigate();

  return (
    <div>
      <div>Second Component</div>
      <button
        style={{
          fontWeight: "bold",
          fontSize: "20px",
          marginLeft: "10%",
          marginTop: "10px",
        }}
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
    </div>
  );
}

export default PageTwo;