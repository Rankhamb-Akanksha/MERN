import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";

function ChildTwo() {
  const { watch, register, setValue } = useFormContext();
  let education = watch("education");

  React.useEffect(() => {
    setValue("firstname", "ABC");
  },[education]);
    

  return (
    <div>
      <div>ChildFormTwo</div>
      <input
        style={{ marginLeft: "5px", border: "2px solid black" }}
        placeholder="education"
        {...register("education")}
        name="education"
      />

      <input
        style={{ marginLeft: "5px", border: "2px solid black" }}
        placeholder="address"
        {...register("address")}
        name="address"
      />
    </div>
  );
}

export default ChildTwo;
