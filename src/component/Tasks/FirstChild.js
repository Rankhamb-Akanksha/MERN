import React, { useContext } from "react";
import { TaskContext } from "./TaskParent";

function FirstChild() {
  const { array, setArray } = useContext(TaskContext);
  return (
    <div>
      <div>First Child</div>
      <button
        onClick={() => {
          let dataArray = [...array];
          dataArray.push({
            userName: "Akku",
            passWord: "1234",
          });
          setArray(dataArray);
        }}
      >
        Add Object
      </button>
    </div>
  );
}

export default FirstChild;
