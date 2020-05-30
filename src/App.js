import React, { Component } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
import Form from "./Components/Form/Form";
import axios from "axios";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory: [],
      selectedProduct: {},
    };
    this.getInventory = this.getInventory.bind(this)
    this.handleSelectedProduct =this.handleSelectedProduct.bind(this)
  }

  getInventory() {
    return axios
      .get("/api/inventory")
      .then((res) => {
        this.setState({
          inventory: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleSelectedProduct(selectedProduct) {
    this.setState({
      selectedProduct: selectedProduct
    })
  }

  componentDidMount() {
    this.getInventory()
  }

  render() {
    return (
      <div className="App">
        <Dashboard getInventory={this.getInventory} inventory={this.state.inventory} handleSelectedProduct={this.handleSelectedProduct} />
        <Form getInventory={this.getInventory} selectedProduct={this.state.selectedProduct} />
        <Header />
      </div>
    );
  }
}
