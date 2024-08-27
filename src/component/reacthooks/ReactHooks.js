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