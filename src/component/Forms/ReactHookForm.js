import React, { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";

function ReactHookForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [users, setUsers] = useState([]);

  const defaultValues = {
    firstName: "",
    lastName: "",
    middleName: "",
    education: [{ education: "", passingYear: "", place: "Pune" }],
  };

  const {
    register,
    watch,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { isValid, isDirty },
  } = useForm({
    mode: "onChange",
    defaultValues: defaultValues,
  });

  const { fields, append, remove } = useFieldArray({
    name: "education",
    control,
  });
  const nameWatch = watch("firstName");

  console.log("nameWatch", nameWatch);

  //   const handleClick = () => {
  //     let user = {
  //       firstName: firstName,
  //       lastName: lastName,
  //     };

  //     let data = [...users];
  //     data.push(user);
  //     setUsers(data);
  //     setFirstName("");
  //     setLastName("");
  //     // let myForm = document.getElementById("myForm");
  //     // myForm.reset();
  //   };

  const onSubmitDataHandler = (data) => {
    console.log("data in the form is :", data);
    let dataArray = [...users];
    dataArray.push(data);
    setUsers(dataArray);
    reset(defaultValues);
  };

  React.useEffect(() => {
    setValue("lastName", "ABC");
  }, [nameWatch]);

  //   {
  //     firstName:"saasd",
  //     middleName:"dssdf",
  //     lastName:"sdfsdfsdf"
  //   }

  // {
  //     firstName: "",
  //     lastName: "",
  //     middleName: "",
  //   }

  // error handeling --

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitDataHandler)}>
        <div>React Hook Form</div>
        <div>
          <input
            type="text"
            placeholder="First Name"
            {...register("firstName")}
          />

          <input
            type="text"
            placeholder="Last Name"
            {...register("middleName")}
          />

          <input
            type="text"
            placeholder="Last Name"
            {...register("lastName")}
          />
        </div>
        <button
          type="submit"
          // onClick={(e) => {
          //   e.preventDefault();
          //   handleClick();
          // }}
        >
          Add
        </button>
      </form>

      <div>
        {fields.map((field, index) => {
          return (
            <div>
              <input
                style={{
                  marginLeft: "5px",
                  border: "2px solid black",
                }}
                name={`education.${index}.education`}
                placeholder="education"
                {...register(`education.${index}.education`)}
              />      

              <input
                style={{
                  marginLeft: "5px",
                  border: "2px solid black",
                }}
                name={`passingYear.${index}.passingYear`}
                placeholder="passingYear"
                {...register(`education.${index}.passingYear`)}
              />  

              <input
                style={{
                  marginLeft: "5px",
                  border: "2px solid black",
                }}
                name={`place.${index}.place`}
                placeholder="place"
                {...register(`education.${index}.place`)}
              />
              <button style={{
                marginLeft:"5px",
              }}
              type="button" onClick={()=>{
                append({education:" ", passingYear:" ", place:""})
              }}
              >
              Append</button>
              {index !==0 && (
              <button style={{
                marginLeft:"5px",
              }}
              type="button" onClick={()=>{
                remove({education:" ", passingYear:" ", place:""})
              }}
              >
              Remove</button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ReactHookForm;
