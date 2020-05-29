import React, { Component } from "react";

export default class Product extends Component {
  constructor() {
    super();
  }

  render() {
    const {data} = this.props
    return <div>
      <div>{data.imgurl}</div>
      <div>{data.name}</div>
      <div>{data.price}</div>
    </div>;
  }
}
