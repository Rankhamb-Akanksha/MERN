import React from "react";
import { useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();

  let object = {
    name: "John",
    age: 20,
    childs: [
      {
        name: "first Child",
      },
    ],
  };

  let objectTwo = {
    name: "ABC",
    age: 20,
    childs: [
      {
        name: "Second Child",
      },
    ],
  };

  const handleNavigate = (path, params) => {
    navigate(path, { state: params });
  };

  return (
    <div>
      <div
        style={{
          fontWeight: "bold",
          fontSize: "20px",
          marginLeft: "40%",
          marginTop: "10px",
        }}
      >
        Landing Page For the Reactjs Application
      </div>
      <button
        style={{
          fontWeight: "bold",
          fontSize: "20px",
          marginLeft: "10%",
          marginTop: "10px",
        }}
        type="button"
        onClick={() => {
          let path = "/firstcomponent";
          handleNavigate(path, object);
        }}
      >
        First
      </button>
      <button
        style={{
          fontWeight: "bold",
          fontSize: "20px",
          marginLeft: "10%",
          marginTop: "10px",
        }}
        type="button"
        onClick={() => {
          let path = "/secondComponent";
          handleNavigate(path, objectTwo);
        }}
      >
        Second
      </button>
    </div>
  );
}

export default Layout;