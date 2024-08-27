// import React from "react";
// //import ThirdComponent from "./ThirdComponent";

// import { useState } from "react";

// function FirstComponent() {
//   let initialNumberState = 0;
//   let initialObjectState = { a: 1, b: 2 };
//   let initialArrayState = [1, 2, 3, 4, 5, 6];

//   // let initialStringState="string"

//   let initialValue = false; //boolean

//   const [count, setCount] = useState(initialNumberState);
//   const [objectState, setObjectState] = useState(initialObjectState);
//   const [arrayState, setArrayState] = useState(initialArrayState);
//   const [booleanState, setBooleanState] = useState(initialValue);

//   const handleAdd = () => {
//     setCount(count + 1);
//   };

//   const handleChange = () => {
//     setCount(10);
//   };

//   const handleObject = () => {
//     let objectVariable = { c: 2, d: 3 };
//     setObjectState(objectVariable);
//   };

//   const handleArray = () => {
//     let dataArray = arrayState;
//     let modifiedArray = dataArray.filter((item) => item <= 3);
//     setArrayState(modifiedArray);
//   };

//   const handleChangeValue = () => {
//     setBooleanState(!booleanState);
//   };

//   React.useEffect(() => {
//     console.log("the state variable in the component is :", booleanState);
//   }, [booleanState]);

//   return (
//     <div>
//       {booleanState === true ? (
//         <div>Handeling True states </div>
//       ) : (
//         <div>Handeling False states </div>
//       )}

//       <button
//         onClick={() => {
//           handleAdd();
//         }}
//       >
//         Add
//       </button>

//       <button
//         onClick={() => {
//           handleChange();
//         }}
//       >
//         Change State
//       </button>

//       <button
//         onClick={() => {
//           handleObject();
//         }}
//       >
//         Change State
//       </button>

//       <button
//         onClick={() => {
//           handleArray();
//         }}
//       >
//         Update Array
//       </button>

//       <button
//         onClick={() => {
//           handleChangeValue();
//         }}
//       >
//         Update Boolean Value
//       </button>
//     </div>
//   );
// }

// export default FirstComponent;


// ------------------------------------------------------------------------------------------------------


// import React from "react";

// const initialArray = [
//   {
//     Parent: {
//       Label: "First Parent",
//       childs: [
//         {
//           a: "First Child",
//         },
//         {
//           a: "Second Child",
//         },
//       ],
//     },
//   },
//   {
//     Parent: {
//       Label: "Second Parent",
//       childs: [
//         {
//           a: "First Child",
//         },
//         {
//           a: "Second Child",
//         },
//       ],
//     },
//   },
// ];

// function ArrayMapping() {
//   const [mappingArray, setMappingArray] = React.useState(initialArray);

//   const handleChildClick = (itemIndex, childIndex) => {
//     // whenever you have to modify array
//     // spread before any changes
//     let dataArray = [...mappingArray];

//     dataArray[itemIndex].Parent.childs[childIndex].a = "second child change";
//     dataArray[itemIndex].Parent.childs[childIndex].b = "Child Added";

//     setMappingArray(dataArray);

//     console.log("Modified data :", dataArray);

//     console.log(
//       "target child :",
//       dataArray[itemIndex].Parent.childs[childIndex]
//     );

//     console.log("changing Parents", dataArray, itemIndex, childIndex);
//   };

//   return (
//     <div>
//       <div className="grid px-20 my-2">
//         {mappingArray.map((item, itemIndex) => {
//           console.log("item", item);
//           return (
//             <div
//               style={{
//                 fontWeight: "bold",
//               }}
//             >
//               <div className="-ml-5 flex justify-start">{item?.Parent?.Label}</div>
//               {item?.Parent?.childs?.length > 0
//                 ? item?.Parent?.childs.map((child, childIndex) => {
//                     return (
//                       <div className="flex justify-start my-2">
//                         <button
//                           type="button"
//                           onClick={() => {
//                             handleChildClick(itemIndex, childIndex);
//                           }}
//                           style={{ marginTop: "5px", marginLeft: "10px" }}
//                         >
//                           {child?.a}
//                         </button>

//                         <button
//                           type="button"
//                           onClick={() => {
//                             handleChildClick(itemIndex, childIndex);
//                           }}
//                           style={{ marginTop: "5px", marginLeft: "10px" }}
//                         >
//                           {/* ? === if b exists then map */}
//                           {child?.b}
//                         </button>
//                       </div>
//                     );
//                   })
//                 : ""}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default ArrayMapping;

// ---------------------------------------------------------------------------------------------------


import React from "react";

function Child({ number }) {
  console.log("child function..!");

  const memoize = React.useMemo(() => {
    let result = 0;
    for (let i = 0; i <= 100000000000000; i++) {
      result += number;
    }
    return result;
  }, [number]);

  return <div>{"value after Memo :" + memoize}</div>;
}

function ReactHooks() {
  const [count, setCount] = React.useState(0);
  const [number, setNumber] = React.useState(1);

  //   if calls on button click
  // getData(postObject)
  //   .then((response)=>{
  //     response.data
  //   })
  //   .catch((error)=>{
  //     erro
  //   })

  // if the post object or single value in post object changes then only memoization will work

  // React.useMemo(()=>{
  // // getData(postObject)
  // //   .then((response)=>{
  // //     response.data
  // //   })
  // //   .catch((error)=>{
  // //     erro
  // //   })
  // },[postObject])

  //useEffect

  // component did mount
  //   React.useEffect(() => {
  //     console.log("Checking Render");
  //   }, []);

  // because of dependency works as componentShouldUpdate/componentDidUpdate
  //   React.useEffect(() => {
  //     console.log("The count is :", count);
  //   }, [count]);

  React.useEffect(() => {
    const interval = setInterval(
      () => {
        if (count <= 10) {
          setCount(count + 1);
        }
      },
      2000 // interval time in miliseconds
    );

    //     return () => clearInterval(interval);
  }, [count]);

  const handleChangeCount = () => {
    console.log("change count called");

    const timeOut = setTimeout(() => {
      console.log("console  after the timeout");
    }, 5000);

    return () => clearTimeout(timeOut);
  };

  // function One
  //   -
  //   -
  //   -
  //   -

  console.log("aaaaaaaaaaaa");

  return (
    <div>
      <div>ReactHooks</div>
      <div>{"Count" + " " + count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
          handleChangeCount();
        }}
      >
        Change Count
      </button>
      <div>{"Number" + " " + number}</div>
      <button
        onClick={() => {
          setNumber(number + 1);
          //   handleChangeCount();
        }}
      >
        Change Number
      </button>
      {/* <Child number={number} /> */}
    </div>
  );
}

export default ReactHooks;