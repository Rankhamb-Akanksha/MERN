import React from "react";

function ThirdChild({ array }) {
  return (
    <div>
      <div>Third Child</div>
      <div>
        {array?.map((item) => {
          return <div>{item?.userName + " " + item?.passWord}</div>
        })}
      </div>
    </div>
  );
  
}

export default ThirdChild;
