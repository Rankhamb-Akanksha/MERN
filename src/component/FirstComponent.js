import React, { useState } from "react";

function FirstComponent() {
  let initialNumberState = 0;
  let initialObjectState = { a: 1, b: 2 };
  let initialArrayState = [1, 2, 3, 4, 5, 6];
  let initialvalue = "Akku";

  const [Count, setCount] = useState(initialNumberState);
  const [String, setString] = useState(initialvalue);
  const [Object, setObject]= useState(initialObjectState);
  const [Array, setArray]= useState(initialArrayState);

  const handleAdd = () => {
    setCount(Count + 1);
    console.log(Count);
  };
  const handleChange = () => {
    setCount(10);
    console.log(Count);
  };
 const handleObject=() =>{
    let objectVariable={};
    setObject(objectVariable);
    console.log(Object);
  }

 const handleArray=()=>{
  let dataArray = Array;
  let modifiedArray = dataArray.filter((item) => item <= 3);
    setArray(modifiedArray);
    console.log(Array);
 }

  // console.log(String);

  const handleString = () => {
    setString("Hiii");
    console.log(String);
  };

  return (
    <div>
      <button
        className="bg-blue-500"
        onClick={() => {
          handleAdd();
        }}
      >
        Add
      </button>
      <button
        className="bg-pink-500"
        onClick={() => {
          handleChange();
        }}
      >
        Change State
      </button>
      <button
      className="bg-red-500"
      onClick={() => {
        handleObject();
      }}
    >
      Object
    </button>

    <button
      className="bg-yellow-500"
      onClick={() => {
        handleArray();
      }}
    >
      Array
    </button>

      <button
        className="bg-green-500"
        onClick={() => {
          handleString();
        }}
      >
        Update
      </button>
    </div>
  );
}

export default FirstComponent;
