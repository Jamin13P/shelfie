import React, { Component } from "react";
import axios from "axios";

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      price: 0,
      imgurl: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  addProduct() {}

  handleCancel() {
    this.setState({
      name: "",
      price: 0,
      imgurl: "",
    });
  }

  updateInventory(name, price, imgurl) {
    const body = { name, price, imgurl };

    axios
      .post("/api/product", body)
      .then((res) => {
        this.setState({
          name: this.state.name,
          price: this.state.price,
          imgurl: this.state.imgurl
        })
      })
      .catch((err) => {
        console.log(err);
      });

    this.props.componentDidMount();

    this.handleCancel();
  }

  render() {
    return (
      <div>
        <input
          name="name"
          value={this.state.name}
          placeholder="name"
          onChange={(e) => this.handleChange(e)}
        />
        <input
          name="price"
          value={this.state.price}
          onChange={(e) => this.handleChange(e)}
        />
        <input
          name="imgurl"
          value={this.state.imgurl}
          placeholder="image url"
          onChange={(e) => this.handleChange(e)}
        />
        <button onClick={() => this.updateInventory()}>Add to Inventory</button>
        <button onClick={() => this.handleCancel()}>Cancel</button>
      </div>
    );
  }
}
