import { render } from "@testing-library/react";
import React, { Component } from "react";

class Parent extends Component {
  //Constructor is parent for managing states
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  //render or do somthing when compo mounted
  componentDidMount() {
    console.log("Parent compo mounted");
  }
  //whether to update or not
  shouldComponentUpdate() {
    console.log("should compo update");
    return true;
  }
  //if the compo state is updated
  componentDidUpdate() {
    console.log("call after updating compo");
  }

  changeCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  // toggeleChild=()=>{
  //     this.setState((prevState)=>({

  //     }))

  render() {
    return (
      <div>
        <div>Parent</div>
        <div>{this.state.count}</div>
        <button onClick={this.changeCount}>Change Count</button>
      </div>
    );
  }
}
export default Parent;
