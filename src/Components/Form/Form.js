import React, { Component } from "react";
import axios from "axios";

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      price: 0,
      imgurl: "",
      id: null
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleCancel() {
    this.setState({
      name: "",
      price: 0,
      imgurl: "",
    });
  }

  addProduct() {
    axios
      .post("/api/product", {
        name: this.state.name,
        price: this.state.price,
        imgurl: this.state.imgurl,
      })
      .then(() => {
        this.props.getInventory()
        .then(() => {
          this.handleCancel();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  editProduct(id) {
    axios
    .put(`/api/product/${id}`)
    .then((res) => {
      this.setState({
        name: res.data,
        price: res.data,
        imgurl: res.data
      })
    })
  }

  // I got help with writing this lifecycle method
  componentDidUpdate(prevProps) {
    console.log("Previous props: ", prevProps, "Current props: ", this.props)

    if(prevProps.selectedProduct.id !== this.state.id){
      this.setState({
        id: this.props.id
      })
    }
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
        {this.state.id == null ? <button onClick={() => this.addProduct()}>Add to Inventory</button> : <button>Save Update</button>}
        <button onClick={() => this.handleCancel()}>Cancel</button>
      </div>
    );
  }
}
