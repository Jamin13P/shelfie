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
      selectedProductId: null,
    };
    this.getInventory = this.getInventory.bind(this)
    this.handleSelectedProductId = this.handleSelectedProductId.bind(this)
    this.resetSelectedProductId = this.resetSelectedProductId.bind(this)
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

  handleSelectedProductId(selectedProductId) {
    this.setState({
      selectedProductId: selectedProductId
    })
  }

  resetSelectedProductId() {
    this.setState({
      selectedProductId: null
    })
  }

  componentDidMount() {
    this.getInventory()
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard getInventory={this.getInventory} inventory={this.state.inventory} handleSelectedProductId={this.handleSelectedProductId} />
        <Form getInventory={this.getInventory} selectedProductId={this.state.selectedProductId} reset={this.resetSelectedProductId} inventory={this.state.inventory} />
      </div>
    );
  }
}
