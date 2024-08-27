import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";

function ParentForm() {
  const defaultValues = {
    firstname: "",
    lastname: "",
    education: "",
    // place: "",
    address: "",
  };

  const methods = useForm({
    mode: "onChange",
    defaultValues: defaultValues,
  });

  const { watch, handleSubmit, register } = methods;

  const onSubmitData = (data) => {
    console.log("The Form from the child is", data);
  };

  return (
    //value{{}}
    <FormProvider {...methods}>
      <div>ParentForm</div>
      <form onSubmit={handleSubmit(onSubmitData)}>
      <div style={{ marginTop: "10px" }}>
        <ChildOne />
      </div>

      <div style={{ marginTop: "10px" }}>
        <ChildTwo />
      </div>

      <button style={{ marginTop: "5px" , border:"2px solid black"}} type="submit">
        Submit Form
      </button>
      </form>
    </FormProvider>
  );
}

export default ParentForm;
