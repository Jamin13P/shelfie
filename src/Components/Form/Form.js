import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      price: 0,
      imgurl: "",
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  addProduct() {
    
  }

  handleCancel() {
    this.setState({
      name: "",
      price: 0,
      imgurl: "",
    });
  }

  render() {
    return (
      <div>
        <input name="name" value={this.state.name} placeholder="name" type="text" onChange={(e) => this.handleChange(e)} />
        <input name="price" value={this.state.price} placeholder="price" type="number" onChange={(e) => this.handleChange(e)} />
        <input name="imgurl" value={this.state.imgurl} placeholder="image url" type="text" onChange={(e) => this.handleChange(e)} />
        <button>Add to Inventory</button>
        <button onClick={() => this.handleCancel()}>Cancel</button>
      </div>
    );
  }
}
