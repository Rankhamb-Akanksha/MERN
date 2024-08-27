import React from "react";
import { useContext } from "react";
import { GlobalContext } from "./ContextProvider";

function ContextChildOne() {
  const { array, setArray, count, setCount } = useContext(GlobalContext);

  let objectOne = {
    name: "abc",
    age: 20,
  };

  console.log("context from parent :", array);

  const handlePushOne = () => {
    let dataArray = [...array];
    dataArray.push(objectOne);
    setArray(dataArray);
    setCount(count + 5);
  };

  return (
    <div>
      <div style={{ marginTop: "10px", marginBottom: "10px" }}>
        ContextChild One
      </div>
      <button
        type="button"
        onClick={() => {
          handlePushOne();
        }}
      >
        push
      </button>
    </div>
  );
}

export default ContextChildOne;
