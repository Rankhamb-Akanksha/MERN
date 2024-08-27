import React from "react";
import { createContext } from "react";
import ContextChildOne from "./ContextChildOne";

export const GlobalContext = createContext();

// Parent
function ContextProvider() {
  let initialArray = [
    {
      name: "John",
      age: 20,
    },
  ];
  const [array, setArray] = React.useState(initialArray);
  const [count, setCount] = React.useState(10);

  return (
    <GlobalContext.Provider value={{ array, setArray, count, setCount }}>
      <div>
        <div>ContextProvider</div>

        <div style={{ marginTop: "10px", marginBottom: "10px" }}>
          {array.map((item) => {
            return <div>{item.name}</div>;
          })}
        </div>
        <div style={{ marginTop: "10px", marginBottom: "10px" }}>{count}</div>
        <div>
          <ContextChildOne />
        </div>
        
        
      </div>
    </GlobalContext.Provider>
  );
}

export default ContextProvider;
