import React from "react";

export default function Product(props) {
  const { data } = props;
  return (
    <div>
      <div>{data.imgurl}</div>
      <div>{data.name}</div>
      <div>{data.price}</div>
      <button onClick={() => props.handleSelectedProduct(data.id)}>Edit</button>
      <button onClick={() => props.deleteProduct(data.id)}>Delete</button>
    </div>
  );
}
