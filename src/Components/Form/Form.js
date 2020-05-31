import React, { Component } from "react";
import axios from "axios";

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      price: 0,
      imgurl: "",
      id: null,
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
    this.props.reset();
  }

  addProduct() {
    axios
      .post("/api/product", {
        name: this.state.name,
        price: this.state.price,
        imgurl: this.state.imgurl,
      })
      .then(() => {
        this.props.getInventory().then(() => {
          this.handleCancel();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updateProduct() {
    axios
      .put(`/api/product/${this.state.id}`, {
        name: this.state.name,
        price: this.state.price,
        imgurl: this.state.imgurl,
      })
      .then((res) => {
        this.setState({
          name: res.data,
          price: res.data,
          imgurl: res.data,
        });
        this.props.getInventory().then(() => {
          this.handleCancel();
        });
      });
  }

  // I got help on this to understand what it is
  componentDidUpdate(oldProps) {
    if (
      this.props.selectedProductId !== oldProps.selectedProductId &&
      this.props.selectedProductId != null
    ) {
      const productToUpdate = this.props.inventory.find(
        (product) => product.id === this.props.selectedProductId
      );

      const { name, price, imgurl } = productToUpdate;

      this.setState({
        id: this.props.selectedProductId,
        name,
        price,
        imgurl,
      });
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
          {this.props.selectedProductId == null ? (
            <div>
              <button onClick={() => this.addProduct()}>
                Add to Inventory
              </button>
              <button onClick={() => this.handleCancel()}>Cancel</button>
            </div>
          ) : (
            <div>
              <button onClick={() => this.updateProduct()}>Save Changes</button>
              <button onClick={() => this.handleCancel()}>Cancel</button>
            </div>
          )}
      </div>
    );
  }
}
