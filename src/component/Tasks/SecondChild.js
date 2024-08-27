import React, { useContext } from 'react'
import { TaskContext } from './TaskParent'

function SecondChild() {
    const {array, setArray}= useContext(TaskContext);
  return (
    <div>
      <div>Second Child</div>
      <button 
      onClick={()=>{
        let dataArray=[...array];
        dataArray.push({
            userName: "Vaishu",
            passWord:"5678"
        });
        setArray(dataArray);
    }}
        >
        Add Object
      </button>

    </div>
  );
}

export default SecondChild
