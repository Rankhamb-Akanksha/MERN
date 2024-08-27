import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function TaskForm() {
  const [users, setUsers] = React.useState([]);
  const [isEdit, setIsEdit] = React.useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editIndex, setEditIndex] = React.useState(null);

  const defaultValues = {
    firstName: "",
    middleName: "",
    lastName: "",
  };
  const { setValue, reset, watch, register } = useForm({
    mode: "onChange",
    defaultValues: defaultValues,
  });

  const [firstNameWatch, middleNameWatch, lastNameWatch] = watch([
    "firstName",
    "middleName",
    "lastName",
  ]);

  const handleAddUser = () => {
    let user = {
      firstName: firstNameWatch,
      middleName: middleNameWatch,
      lastName: lastNameWatch,
    };

    // firstly spread the arrays before modifying it
    let dataArray = [...users];

    dataArray.push(user);

    setUsers(dataArray);

    reset(defaultValues);
  };

  const handleEdit = (user, index) => {
    setEditIndex(index);
    // setSelectedUser(user);
    setIsEdit(true);

    reset(user);
  };

  const handleUpdateUser = () => {
    let dataArray = [...users];

    let updatedUser = {
      firstName: firstNameWatch,
      middleName: middleNameWatch,
      lastName: lastNameWatch,
    };

// array.splice(index to modify,nunmber of deletions,element to place at the index)
    dataArray.splice(editIndex, 1, updatedUser);


    setUsers(dataArray);
    reset(defaultValues);



    console.log("updatedUsers array :", dataArray, updatedUser);
    if (users?.length > 0) {
      for (let userObject of dataArray) {
        // if(userObject===selectedUser){
        //     userObject={
        //         firstName:firstNameWatch,
        //         middleName:middleNameWatch,
        //         lastName:lastNameWatch
        //     }
        // }
      }
    }
  };

  return (
    <div>
      <div>Task Form</div>
      <input
        type="text"
        name="firstName"
        {...register("firstName")}
        placeholder="firstName"
      />
      <input
        type="text"
        name="middleName"
        {...register("middleName")}
        placeholder="middleName"
      />
      <input
        type="text"
        name="lastName"
        {...register("lastName")}
        placeholder="lastName"
      />

      {isEdit === false ? (
        <button
          onClick={() => {
            handleAddUser();
          }}
          type="button"
        >
          Add
        </button>
      ) : (
        <button
          onClick={() => {
            handleUpdateUser();
          }}
          type="button"
        >
          Update
        </button>
      )}
      <div
        style={{
          marginTop: "10px",
        }}
      >
        <table>
          <thead>
            <tr>
              <td>Action</td>
              <td>First Name</td>
              <td>Middle Name</td>
              <td>Last Name</td>
            </tr>
          </thead>
          <tbody>
            {users?.length > 0
              ? users.map((user, index) => {
                  return (
                    <tr>
                      <td>
                        <button
                          type="button"
                          onClick={() => {
                            handleEdit(user, index);
                          }}
                        >
                          Edit
                        </button>
                      </td>
                      <td>{user?.firstName}</td>
                      <td>{user?.middleName}</td>
                      <td>{user?.lastName}</td>
                    </tr>
                  );
                })
              : ""}
          </tbody>
        </table>
      </div>
    </div>
  );
}

