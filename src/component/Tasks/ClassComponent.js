import React from "react";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: 0,
      products: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.addProduct = this.addProduct.bind(this);
  }
  handleChange(e) {
    this.setState((prev) => ({
      [e.target.name]: e.target.value,
    }));
  }
  addProduct() {
    let dataArray = [...this.state.products];
    console.log("dataArray", this.state);
    let productObject = {
      productName: this.state.productName,
      price: this.state.productPrice,
    };
    dataArray.push(productObject);
    this.setState((prev) => ({
      products: dataArray,
    }));
  }
  render() {
    return (
      <div>
        <div>Class Form...!</div>
        <input name="productName" onChange={this.handleChange} />
        <input name="productPrice" onChange={this.handleChange} />
        <button type="button" onClick={this.addProduct}>
          Add
        </button>
        <div>{this.state.productName}</div>     
        <div>
          <table>
            <tbody>
              {this.state.products.length > 0 &&
                this.state.products.map((product, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{product.productName}</td>
                      <td>{product.price}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
                  
        </div>
      </div>
    );
  }
}

export default ClassComponent;
