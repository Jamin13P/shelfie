import React, {Component} from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
import Form from "./Components/Form/Form";
import "./App.css";

export default class App extends Component {
  constructor(){
    super()

    this.state = {
      inventory: [{id: 1, name: "Shampoo", price: 5.99, imgurl: "Shampoo url"}, {id: 2, name: "Deodorant", price: 3.99, imgurl: "Deodorant url"}, {id: 3, name: "Brush", price: 8.99, imgurl: "Brush url"}],
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <Dashboard inventory={this.state.inventory} />
        <Form />
        <Header />
      </div>
    );
  }
}
