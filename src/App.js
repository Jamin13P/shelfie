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
    };
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    axios
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

  render() {
    return (
      <div className="App">
        <Dashboard inventory={this.state.inventory} />
        <Form componentDidMount={this.componentDidMount} />
        <Header />
      </div>
    );
  }
}
