//Child.js

import React from "react";

// function Child({count,object,setCount}) {
function Child(props) {
  const { object, setCount, count } = props;

  console.log("props first child", object);

  const handleCount = () => {
    setCount(count + 20);
  };

  return (
    <div>
      <div>Child</div>

      <div>
        <button
          type="button"
          onClick={() => {
            handleCount();
          }}
        >
          Modify Count
        </button>
      </div>
    </div>
  );
}

export default Child;