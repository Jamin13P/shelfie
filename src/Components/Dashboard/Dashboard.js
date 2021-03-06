import React, { Component } from "react";
import Product from "../Product/Product";
import axios from "axios";

export default class Dashboard extends Component {
  constructor() {
    super();

    this.deleteProduct = this.deleteProduct.bind(this);
  }

  deleteProduct(id) {
    axios
    .delete(`/api/product/${id}`)
    .then(() => {
      this.props.getInventory();
    });
  }

  render() {
    const inventoryMap = this.props.inventory.map((elem) => (
      <Product key={elem.id} data={elem} deleteProduct={this.deleteProduct} handleSelectedProductId={this.props.handleSelectedProductId} />
    ));
    return <div>{inventoryMap}</div>;
  }
}
