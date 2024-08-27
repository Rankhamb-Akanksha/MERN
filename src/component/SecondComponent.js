import React, { useState } from "react";

function SecondComponent() {
  let initialnumber = 0;
let initalArray=[1,2,3,4,5];

  const [count, setCount] = useState(initialnumber);
const[Array, setArray]= useState(initalArray);

  const handleAdd = () => {
    setCount (count + 1);
    console.log(count);
  };

  const handleArray=()=>{
   let dataArray=Array;
   let modifiedArray= dataArray.filter((item)=> item <=5);
    setArray(modifiedArray);
    console.log(Array);
  }

  return (
    <div>
      
       <button type="button"
        onClick={() => {
          handleAdd();
        }}
      >
        Add
      </button>
<button onClick={()=>{
  handleArray();
}}
>Array</button>
    </div>
  );
}

export default SecondComponent;
