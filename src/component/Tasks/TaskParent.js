import React, { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux-Reducer/CounterSlice";
import FirstChild from "./FirstChild";
import SecondChild from "./SecondChild";
import ThirdChild from "./ThirdChild";
export const TaskContext = createContext();

function TaskParent() {
  const [array, setArray] = React.useState([]);

  const countValue = useSelector((state) => state?.counter?.value);
  console.log("The Value from the Global State:--", countValue);

  const dispatch = useDispatch();

  return (
    <div>
      <div>Task Parent</div>

      <div
        style={{
          marginTop: "10px",
          marginBottom: "10px",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        {"Value from the Global State:-" + " " + countValue}
      </div>

      <button
        type="button"
        onClick={() => {
          dispatch(increment(20));
        }}
      >
        Increment
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch(decrement(10));
        }}
      >
        Dncrement
      </button>
      <TaskContext.Provider value={{ array, setArray }}>
        <FirstChild />
        <SecondChild />
        <ThirdChild />
      </TaskContext.Provider>
    </div>
  );
}

export default TaskParent;
