import React from "react";
import { useFormContext } from "react-hook-form";

function ChildOne() {
  const { watch, register } = useFormContext();

  return (
    <div>
      <div>ChildFormOne</div>
      <input
        style={{ marginLeft: "5px",border:"2px solid black" }}
        placeholder="First Name" 
        {...register("firstname")}
        name="firstname"
      />

      <input
        style={{ marginLeft: "5px" , border:"2px solid black"}}
        placeholder="Last Name" 
        {...register("lastname")}
        name="lastname"
      />
    </div>
  );
}

export default ChildOne;
